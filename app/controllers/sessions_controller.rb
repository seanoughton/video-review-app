class SessionsController < ApplicationController

  def create
    @user = User.find_by(user_name: params[:user][:user_name])
    @user = @user.try(:authenticate, params[:user][:password])
    render json: @user
  end

  def destroy
    session.delete :user_id
    redirect_to '/'
  end





end
