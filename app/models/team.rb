class Team < ApplicationRecord
  #RELATIONSHIPS
  has_many :users
  has_many :projects

end
