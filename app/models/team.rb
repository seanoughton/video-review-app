class Team < ApplicationRecord
  #RELATIONSHIPS
  has_many :projects
  has_many :users

end
