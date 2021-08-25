class OrdersController < ApplicationController
    
    def show
        order = Order.find(params[:id])
        render json: order, include: [:item, :user]
      end
    
    def create
        order = Order.create(order_params)
        if order.valid?
            render json: order
        else
        render json: {message: order.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
    
    private
    
    def order_params
    params.require(:order).permit(:user_id, :item_id)
    end
end
