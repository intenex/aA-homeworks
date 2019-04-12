function Cat () {
    this.name = 'Markov';
    this.age = 3;
}

function Dog () { // so can put spaces between all the parentheses and all that or not that's great definitely experiment with all of this way more
    this.name = 'Noodles'; // so lucky to be getting to understand javascript and become really familiar with its syntax and all that so great
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog (); // right this invokes the function which is what you want to invoke it when creating a new instance of it great to learn all this definitely get way more into it amazing that you can have a space between the parentheses and Javascript doesn't care lol

// so lucky to have been so focused today and to have just gotten through everything being on
// all day so quickly. So insanely lucky to be done with everything and to get to go to sleep on time
// so fucking fortunate for every day where everything goes right. Just keep on keeping on
// and push through it all and it'll be great. Let's fucking do this, so fucking lucky.

Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles); // this calls Markov.chase(Noodles) effectively, passing in Markov as the object of `this` binding that the method is effectively being called on and `Noodles` as the argument for the anonymous function that .chase is equal to amazing lmao so great to understand the syntax and all of this makes sense now
// so lucky that this all makes sense truly now so fucking great
Noodles.chase.apply(Markov, [Noodles]);

// so fucking lucky to not get stuck at all and to fully understand all this stuff so much.
// things will be a lot easier going forward from here because you pushed through it and worked to get
// all the understanding. Keep pushing until you understand everything for sure so fucking lucky
// can't wait to write all the methods for the test actually seems way more approachable now
// and to learn everything else next week and onwards wow it's all so fucking great
// super fucking excited to learn it all now that you have started to understand it all
// now with this basic knowledge you can keep cementing it and coalescing your knowledge
// until you fucking own both JS and Ruby. Fucking can't wait. So lucky to have gotten to this point

/* let's make it all happen :) */