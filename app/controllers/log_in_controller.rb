class LogInController < ApplicationController
#main difference is that we want to find a user vs creating
    def create
        user = User.find_by(username: params[:user][:username])
        #byebug
        if user && user.authenticate(params[:user][:password])
            render json: {id:user.id, username:user.username}
        else
            render json: {message: ['Incorrect username and/or password']}
        end
    end
end
