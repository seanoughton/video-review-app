class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name
  belongs_to :team
end
