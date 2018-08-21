class ProjectsController < ApplicationController


  def index
    @projects = Project.all
    render json: @projects
=begin
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @projects}
    end
=end
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.team_id = Project.first.id
    @project.save
    render json: @project, status: 201
    #redirect_to projects_url
  end

  def show
    @project = Project.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @project}
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    redirect_to projects_url
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_url
  end

  private

  def project_params
    params.require(:project).permit(:project_name, :team_id)
  end


end
