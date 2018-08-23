class Comment < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :video
  belongs_to :user



end
