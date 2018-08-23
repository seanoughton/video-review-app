class Project < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :team
  has_many :videos


end
