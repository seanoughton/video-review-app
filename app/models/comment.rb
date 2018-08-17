class Comment < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :user
  belongs_to :team
  belongs_to :video



end
