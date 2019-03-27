# == Schema Information
#
# Table name: people
#
#  id       :bigint(8)        not null, primary key
#  name     :string
#  house_id :integer
#

class Person < ApplicationRecord
    validates :name, presence: true

    belongs_to(
        :house,
        class_name: 'House',
        foreign_key: :house_id,
        primary_key: :id
    )

    before_validation :dummy_method
    before_update :dummy_method
    before_create :dummy_method
    before_save :dummy_method
    after_save :dummy_method

    def dummy_method; end
end
