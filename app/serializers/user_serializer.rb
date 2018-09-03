class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :admin, :uid, :image, :password_digest
  has_many :comments
  has_many :userprojects

  has_many :projects, through: :userprojects
end
