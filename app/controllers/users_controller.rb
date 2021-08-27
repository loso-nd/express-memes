class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        #byebug 
        if user.valid? 
            render json: {id: user.id, username: user.username}
        else
            render json: {message: user.errors.full_messages}
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
