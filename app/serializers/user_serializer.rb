class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :uid, :image
  has_many :comments
  has_many :userprojects

  has_many :projects, through: :userprojects
end
