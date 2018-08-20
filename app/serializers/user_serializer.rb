class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :uid, :image
  has_many :comments
  has_many :videos
end
