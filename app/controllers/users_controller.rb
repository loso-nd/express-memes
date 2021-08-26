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

<<<<<<< HEAD
    def create
        user = User.create(user_params)
        #byebug 
        if user.valid? 
            render json: {id: user.id, username: user.username}
        else
            render json: {message: user.errors.full_messages}
        end
    end

=======
>>>>>>> 228fa657b937d9978b3f579651a693202228b3b0
    private 
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
