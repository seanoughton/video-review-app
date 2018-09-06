class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name, :description, :likes
  has_many :videos
  has_many :userprojects
  has_many :users, through: :userprojects
end
