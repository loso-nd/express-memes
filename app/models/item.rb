class Item < ApplicationRecord
  belongs_to :store
  has_many :orders, dependent: :destroy
  has_many :users, through: :orders

  validates :item_name, :description, :price, :image_url, presence: {message: "Must not be blank"}
end
