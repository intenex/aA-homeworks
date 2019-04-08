# == Schema Information
#
# Table name: toys
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  toyable_type :string
#  toyable_id   :bigint(8)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Toy < ApplicationRecord
  validates :name, uniqueness: { scope: [:toyable] } # makes it so that names and specific scopes are unique
  # the scope :toyable here is a specific owner, i.e. a specific cat or corgi,
  # so this basically means that names of toys must be unique for a given specific cat or corgi
  belongs_to :toyable, polymorphic: true # both corgis and cats have toyables love it
end

# right these are toys that can belong to either cats or corgis right

# ah that's right the toy belongs to whatever specifies itself as a :toyable
# man that's some tricky stuff you need to learn this better
# but basically a toy belongs_to a :cat or a :corgi and those things
# basically alias themselves as :toyable, so a Cat has_many :toys as a :toyable
# very interesting semantics but Cat and Corgi alias themselves as :toyables
# and have many :toys through that hmm
