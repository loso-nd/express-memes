class RemoveProductFromItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :items, :product, :string
  end
end
