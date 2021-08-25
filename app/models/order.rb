class Order < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validate :three_per_customer
  # custom validators for
  def three_per_customer
    #did this user already order this item 3 times?
    if Order.where(user: self.user, item: self.item).count >=3
      errors.add(:order_amount, "Limit 3 orders of #{self.item.item_name}allowed per user")
    end
  end
end
