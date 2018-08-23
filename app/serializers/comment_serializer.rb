class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :timecode
  belongs_to :video
  belongs_to :user
end
