class Video < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :user
  belongs_to :team
  belongs_to :project
  has_many :comments


end
