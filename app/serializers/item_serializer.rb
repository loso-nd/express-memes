class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :image_url, :price, :secret, :users
  belongs_to :store

  def secret
    #byebug
    "message"
  end
end
