class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name
  has_many :videos
  has_many :userprojects
  has_many :users, through: :userprojects
end
