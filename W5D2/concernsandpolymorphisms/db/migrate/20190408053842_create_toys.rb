class CreateToys < ActiveRecord::Migration[5.1]
  def change
    create_table :toys do |t|
      t.string :name, null: false
      t.references :toyable, polymorphic: true, index: true
      # this line creates both t.integer :toyable_id, index, and
      # t.string :toyable_type amazing
      t.timestamps
    end

    add_index :toys, [:name, :toyable_id, :toyable_type], unique: true
    # makes it so that :names and a specific :toyable_id and :toyable_type are all unique
    # in that combination --> so that a specific foreign key for a specific table for a
    # specific name is unique, basically meaning one unique toy for one unique cat or corgi love it
  end
end

# the :toyable_type I believe refers to the model/class/table that this belongs to
# so it'll either be a corgi or a cat
# and :toyable_id is the foreign key for that given model
# all you need is the :toyable_type addition to basically specify the correct table/model
# for the foreign key to be associated with, fucking love it so lucky to understand this
# well at least