class Video < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :project
  has_many :comments


end
