class User < ApplicationRecord

  #RELATIONSHIPS
  has_many :comments
  has_many :videos
  belongs_to :team


end
