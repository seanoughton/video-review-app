class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
=begin
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @users}
    end
=end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save
    #redirect_to users_url
    render json: @user
  end


  def login
    @user = User.find_by(user_name: params[:user][:user_name])
    @user = @user.try(:authenticate, params[:user][:password])
    if @user
      render json: @user
    else
      render json: false
    end

  end

  def logout

      session.delete :user_id
      #redirect_to '/'

  end


  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @user}
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
    #redirect_to users_url
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    #redirect_to users_url
    render json: {user_id: params[:id]}
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
  end
end
