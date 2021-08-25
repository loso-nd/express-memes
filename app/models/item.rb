class Item < ApplicationRecord
  belongs_to :store
  has_many :orders, dependent: :destroy
  has_many :users, through: :orders

  validates :item_name, :description, presence: true;
end
