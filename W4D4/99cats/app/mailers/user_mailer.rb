class UserMailer < ApplicationMailer
    default from: 'everybody@appacademy.io'

    def welcome_email(user)
        @user = user
        mail(to: 'placeholder@email.com', subject: 'Welcome to 99 Cats!')
    end
end
