class User < ApplicationRecord
    has_many :orders
    has_many :items, through: :orders

    validates :username, :password, presence: {message: "Must be present"}
    validates :username, :email, uniqueness: true 
    has_secure_password

    #how bcrypt is implemented
    # def password=(value)
    #self.password_digest = BCrypt::Password.create(value)
    #end
    #def authenticate(password)
    #BCrypt::Password.new(self.password_digest) == password
    #end
end
