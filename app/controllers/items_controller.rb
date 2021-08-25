class ItemsController < ApplicationController
    before_action :set_item, only: [:show, :update]

    def index
        items = Item.all
        render json: items
    end
    
    def show
        # item = Item.find(params[:id])
        render json: @item
    end

    def create
        #byebug
        item = Item.create(item_params)
        if item.valid?
            render json: item
        else 
            render json: {status: "error", message: item.errors.full_messages}, status: 422
        end 
    end

    def update
        # item = Item.find(params[:id])
        # Item.update(item_params)
        @item.update(item_params)
        render json: @item
    end 

    def destroy
        item = Item.find(params[:id])
        Item.delete
        render json: {message: 'item removed'}
    end 

    private

    def item_params
        params.require(:item).permit(:store_id, :item_name, :description, :image_url, :price)
    end

    def set_item
        @item = Item.find(params[:id])
    end
end