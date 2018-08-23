class User < ApplicationRecord

  #RELATIONSHIPS
  belongs_to :team
  has_many :comments

  #VALIDATIONS
	has_secure_password #USES BCRYPT TO MAKE SURE THAT THE PASSWORD IS ENCRYPTED AND SALTED


end
