class Video < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :project
  has_many :comments, dependent: :destroy #THIS DESTROYS ALL OF THE DIRECT DEPENDENTS BASED ON THE has_many RELATIONSHIP


end
