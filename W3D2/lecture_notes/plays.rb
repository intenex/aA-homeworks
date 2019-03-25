require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database # this is basically a database 
	include Singleton # ensure you only ever have one actual instance of your DB don't make multiple versions that would cause many problems

	def initialize
		super('plays.db') # sets the database up initially with existing database plays.db you instantiated with the import_db.sql file amazing
		self.type_translation = true # ensure that rows you query return their column results in the same type as they were stored in the database - e.g. like an integer in the database would be returned as an integer, not as a string representation of that integer dope, wonder how this works with like date/time data types lol
		self.results_as_hash = true # returns all your results as a hash every column is a key with a value as the value stored in that column for a given row love it
	end
end

class Play
	attr_accessor :title, :year, :playwright_id

	def self.all # will show all the rows in the play table
		data = PlayDBConnection.instance.execute("SELECT * FROM plays")
		data.map { |row| Play.new(row) } # oh cool this creates a new Play instance for every single row in the plays table so basically you're passing the entire representation of each column output into Play.new with 'row'
	end

	def initialize(options) # creates a new instance of the play class, options is a hash with all the column info to pass in
		@id = options['id'] # this will be nil if not defined, which would be the case if the Play object being instantiated is not being pulled from the database but is being created in Ruby for the first time, as SQLite3 will automatically add the PRIMARY KEY id once the data is passed into SQLite love it
		@title = options['title']
		@year = options['year']
		@playwright_id = options['playwright_id']
	end

	def create # saves the instance in question to the database
		raise "#{self} is already in the database" if @id # doesn't work perfectly since you could define this yourself but yeah it does catch it since that shouldn't happen awesome
		 # you have to pass in the attributes to this execute method and close the parentheses here, important to remember man, but these are bindings that you're passing in after your heredoc starter. The SQLite3 gem will sanitize your inputs that you pass in as bindings, look into bindings more, these are bindings. It'll escape characters that are SQL commands amazing
		PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
			INSERT INTO
				plays (title, year, playwright_id)
			VALUES
				(?, ?, ?)
		SQL
		# the ?, ?, ?s will pull in the bindings above --> we use question marks instead of just typing in @title, @year, @playwright_id to prevent against SQL injection attacks always sanitize your data before you throw it in, awesome
		@id = PlayDBConnection.instance.last_insert_row_id # gets the last row's primary key id and then sets that as the self.instance's new @id since it was added to the database and should have an ID assigned now so the methods know not to let it be created and only updated in the future super dope
		# interesting that you don't need a semicolon at the end of these execute statements I guess you can only execute one statement at a time no that's probably not true but it just doesn't require it for the last statement dope
		# totally insane that you don't have an ending parentheses bracket here wtf you start a heredoc with <<- and you put whatever want after it like SQL and you break it with the matching same code <<-SQL is just used as convention but it could be like <<-WOOHOO
		# heredoc --> allows you to embed a bunch of code that will be read in as a string
	end

	def update # updates the instance in question in the database
		raise "#{self} is not in the database" unless @id
		PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id) # must pass these in order fucking love it
			UPDATE 
				plays
			SET 
				title = ?, year = ?, playwright_id = ?
			WHERE
				id = ?
		SQL
	end
end