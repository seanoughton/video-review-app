class Project < ApplicationRecord

  #RELATIONSHIPS
  has_many :videos

  has_many :userprojects

  has_many :users, through: :userprojects

end
