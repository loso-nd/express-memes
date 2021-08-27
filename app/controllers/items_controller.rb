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
            render json: {status: "error", message: item.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end 
    end

    def update
        #byebug
        #item = Item.find(params[:id])
        @item.update(item_params)
        render json: @item
    end 

    def destroy
        item = Item.find(params[:id])
        #item.orders.destroy_all
        item.destroy
        render json: @item
    end 

    private

    def item_params
        params.require(:item).permit(:item_name, :description, :image_url, :price, :product)
    end

    def set_item
        @item = Item.find(params[:id])
    end
end