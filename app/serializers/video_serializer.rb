class VideoSerializer < ActiveModel::Serializer
  attributes :id, :video_name, :url
  belongs_to :user
  belongs_to :project
  belongs_to :team
  has_many :comments

end
