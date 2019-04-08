module Toyable
    extend ActiveSupport::Concern # makes this a concern thanks to Rails magic lol

    included do # this code just runs --> put associations in here
        has_many :toys, as: :toyable # fucking love it right these are just method calls associations are just method calls so you need to just literally run them as methods and invoke them as you include a concern so nuts since that's basically how the code in the the normal model works wow never realized that
        # just thinking about this stuff helps you really understand it so much more the homework is actually really lit wish you got to do more of it
        # run your thing so much better and remember the gripes you had and work to solve those for sure

    end

    def receive_toy(name) # this is an instance method since you `include` these modules and `include` makes normal methods instance methods and `extend` makes them class methods refresh your memory of everything and keep pushing on everything for sure
        # omg the #find_or_create_by method is insane it literally either finds something or creates it holy fuck
        # this is a new method that lets any animal
        # https://apidock.com/rails/v4.2.1/ActiveRecord/Relation/find_or_create_by class method fucking love it ahh APIdock is just a wrapper for Ruby and RoR docs lmao
        new_toy = Toy.find_or_create_by(name: name) # don't need to pass a block otherwise you would need to for any other parameters that would need to be specified thankfully nothing else needs to be specified here lucky to learn this if there were any other columns that needed to be specified other than the things in the arguments hash being passed as the find or create by parameters
        self.toys << new_toy unless self.toys.include?(new_toy) # check this out and try it lol amazing as per https://stackoverflow.com/questions/7297338/how-to-add-records-to-has-many-through-association-in-rails/18114492
        # oh god damn it they're even smarter you can literally just do
        # self.toys.find_or_create_by(name: name) lmao in one line so great from their solution code nice
    end

    module ClassMethods # anything in here becomes...surprise, a class method lol
        # write your own just to test it out. So lucky to have some time to go above and beyond in learning things
        # you really do need to learn on your own and learn to learn for the sake of learning not these bullshit assessments and shit
        # the assessments do make people less into learning for the sake of learning do figure out a way around that
        # basically you just need to make sure the caliber of the person you select is high and figure out a way that assessments
        # aren't something people just spend a ton of time testing for. Hmm pretty difficult. Do think of a way. Drop people down a run if
        # the assessments don't work out, give them more support. You'll have some hard learnings but you'll figure shit out.
        # just prepare people infinitely better before they come in so no reason for people to fail out and no need to push unreasonably hard
        # make it fun. Get insanely motivated people and make it good.

        def find_all_toys(id)
            self.find_by(id: id).toys # get all the toys for a given animal
        end
    end
end