class OrdersController < ApplicationController
    
    def create
        order = Order.create(order_params)
        render json: order, status: :created
    end

    private 
    def order_params
        params.require(:order).permit(:user_id, :order_id, :review)
    end
end
