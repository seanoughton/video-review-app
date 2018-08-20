class TeamsController < ApplicationController

  def index
    @teams = Team.all
    render json: @teams
=begin
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @teams}
    end
=end 
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    @team.save
    redirect_to teams_url
  end

  def show
    @team = Team.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @team}
    end
  end

  def edit
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])
    @team.update(project_params)
    redirect_to teams_url
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    redirect_to teams_url
  end

  private

  def team_params
    params.require(:team).permit(:team_name)
  end
end
