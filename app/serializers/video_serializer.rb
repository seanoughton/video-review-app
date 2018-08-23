class VideoSerializer < ActiveModel::Serializer
  attributes :id, :video_name, :url
  belongs_to :project
  has_many :comments

end
