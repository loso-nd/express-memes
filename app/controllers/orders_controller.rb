class OrdersController < ApplicationController   
    def create
        order = Order.create(item_id:params[:item_id], user_id:session[:user_id])
        render json: order, status: :created
    end

    def destroy
        order = Order.find_by(item_id:params[:item_id], user_id:session[:user_id])
        #byebug
        order.destroy
        render json: {message: "Order has been removed."}
    end
end