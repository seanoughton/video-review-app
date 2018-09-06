class Project < ApplicationRecord

  #RELATIONSHIPS
  has_many :videos, dependent: :destroy #THIS DESTROYS ALL OF THE DIRECT DEPENDENTS BASED ON THE has_many RELATIONSHIP

  has_many :userprojects

  has_many :users, through: :userprojects

end
