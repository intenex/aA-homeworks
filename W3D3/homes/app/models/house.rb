class House < ApplicationRecord
    
    has_many(
        :person,
        class_name: 'Person',
        foreign_key: :house_id,
        primary_key: :id
    )
end