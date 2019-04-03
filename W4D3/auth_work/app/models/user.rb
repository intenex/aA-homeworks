class User < ApplicationRecord
    def self.find_by_credentials(username, password)
        possible_user = User.find_by(username: username)
        return puts "No user found" unless possible_user
        bcrypt_pass = BCrypt::Password.new(possible_user.password_digest) # just turns a pre-existing bcrypt password digest/hash string into a bcrypt password object, .create will actually create a new password digest hash from a given password string
        if bcrypt_pass.is_password?(password)
            possible_user
        else
            puts "Invalid password"
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
    
    attr_reader :password

    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :password, length: { minimum: 6, allow_nil: true } # awesome definitely learn all of these possibilties amazing on the helper methods too check to make sure those aren't deprecated and possibly use them but this is definitely just as easy to write and much more versatile

    before_validation :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
    end
end
