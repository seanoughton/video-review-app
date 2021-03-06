class VideosController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @videos = Video.all
    render json: @videos
=begin
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @videos}
    end
=end
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    #@video.user_id = User.first.id
    #@video.project_id = Project.first.id
    #@video.team_id = Team.first.id
    @video.save
    #redirect_to videos_url
    render json: @video
  end

  def show
    @video = Video.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @video}
    end
  end

  def edit
    @video = Video.find(params[:id])
  end

  def update
    @video = Video.find(params[:id])
    @video.update(video_params)
    render json: @video
    #redirect_to videos_url
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    #redirect_to videos_url
    render json: {video_id: params[:id]}
  end

  private

  def video_params
    params.require(:video).permit(:url, :version, :video_name, :project_id, :approval)
  end

end
