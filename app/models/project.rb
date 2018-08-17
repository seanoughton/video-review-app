class Project < ApplicationRecord

  #RELATIONSHIPS
  has_many :users
  has_many :videos
  belongs_to :team



end
