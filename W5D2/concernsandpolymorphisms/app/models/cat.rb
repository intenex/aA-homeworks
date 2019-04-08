# == Schema Information
#
# Table name: cats
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cat < ApplicationRecord
    include Toyable
    # has_many :toys, as: :toyable # love it amazing so polymorphics end in able
end
