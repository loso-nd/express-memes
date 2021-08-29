class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        item = Item.find(params[:id])
        render json: item
    end

    def create
        item = Item.create(item_params)
        render json: item, status: :created
    end

    def update
        item = Item.find(params[:id])
        item.update(item_params)
        render json: item
    end 

    def destroy
        item = Item.find(params[:id])
        #item.orders.destroy_all
        item.destroy
    end 

    private

    def item_params
        params.require(:item).permit(:item_name, :description, :image_url, :price, :product)
    end
end