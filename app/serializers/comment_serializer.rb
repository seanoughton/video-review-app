class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :video
  belongs_to :user  
end
