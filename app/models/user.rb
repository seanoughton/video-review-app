class User < ApplicationRecord

  #RELATIONSHIPS
  has_many :comments
  has_many :userprojects

  has_many :projects, through: :userprojects

  #VALIDATIONS
	has_secure_password #USES BCRYPT TO MAKE SURE THAT THE PASSWORD IS ENCRYPTED AND SALTED


end
