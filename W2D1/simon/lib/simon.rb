# wtf finished all the tests to pass in 8 minutes but the game is definitely not done yet lmao
# finished everyting with perfect displaying in 20 minutes awesome. Let's add some colorizing here because if anything in the world ever required colorizing, this does lol.
# done and complete with perfect colorizng in 24 minutes :)
require 'colorize'

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = Array.new
  end

  def play
    while !game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message
    @sequence_length += 1
  end

  def show_sequence
    add_random_color
    @seq.each_with_index do |color, index|
      puts "#{index+1}: #{color}".colorize(color.to_sym) # colorize takes in a symbol as the color, you can convert the color string to a symbol with .to_sym so it works perfectly, love it
      sleep(1)
      system('clear')
    end
  end

  def require_sequence
    @sequence_length.times do |index|
      puts "Please repeat back the colors you saw:"
      answer = gets.chomp.downcase
      if answer != @seq[index]
        @game_over = true
        return # instantly return this and end the game if the answer is not equal to the current color in the sequence
      end
    end
  end

  def add_random_color
    colors = ["red", "blue", "yellow", "green"]
    @seq << colors.sample
  end

  def round_success_message
    puts "This round is over. Hope you put in the right answer..."
    sleep(1)
    system('clear')
  end

  def game_over_message
    puts "Sorry, you put in the wrong color and just lost the game."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = Array.new
  end
end
