class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
=begin
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @comments}
    end
=end
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.team_id = Team.first.id
    @comment.user_id = User.first.id
    @comment.video_id = Video.first.id
    @comment.save
    redirect_to comments_url
  end

  def show
    @comment = Comment.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @comment}
    end
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    redirect_to comments_url
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to comments_url
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :team_id, :user_id, :video_id)
  end

end
