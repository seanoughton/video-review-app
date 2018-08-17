class User < ApplicationRecord

  #RELATIONSHIPS
  has_many :comments
  has_many :videos

  #VALIDATIONS
	has_secure_password #USES BCRYPT TO MAKE SURE THAT THE PASSWORD IS ENCRYPTED AND SALTED


end
