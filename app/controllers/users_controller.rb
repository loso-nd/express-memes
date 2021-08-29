class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        session[:user_id] = user.id #allows signups to be enable login 
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password, :email, :admin, :bio)
    end
end