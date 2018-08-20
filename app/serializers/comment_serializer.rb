class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :team
  belongs_to :user
  belongs_to :video  
end
