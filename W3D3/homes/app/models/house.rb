# == Schema Information
#
# Table name: houses
#
#  id      :bigint(8)        not null, primary key
#  address :string
#

class House < ApplicationRecord
    validates :address, presence: true, uniqueness: true

    has_many(
        :residents,
        class_name: 'Person',
        foreign_key: :house_id,
        primary_key: :id
    )

    before_save :downcase_address # runs this after initialization but before saving to the databsae

    private
    def downcase_address # the method name referenced in before_save
        address.downcase!
    end
end