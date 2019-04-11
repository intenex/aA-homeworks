function titleize(array, callback_func) {
	callback_func(array.map(
		(element) => { // need to remember an explicit return here fucking hell yeah good to learn .charAt(index) and slice fuck yeah
		return `Mx. ${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()} Jingleheimer Schmidt`; // all just learning the methods get really into it and learn it all for sure
	}));
}

// fuck yeah callbacks so fucking great
// it's just 100% learning the syntax and getting familiar with it all definitely keep pushing and get as much
// done as you possibly can so you really get the syntax will be rough but you'll get it
// can't wait to get the basics in and then crush this assessment for sure
// now you're starting to remember how you did JS in the past lmao which was just googling the functions you needed
// as you needed them lmao. Can't wait to learn them all now in earnest and do everything possible
function printCallback(array) {
	array.forEach((element) => {
		console.log(element);
	});
}

// fuck yeah constructors can't wait to keep doing this even though it's so damn hard lol
function Elephant(name, height, tricks) {
	this.name = name;
	this.height = height;
	this.tricks = tricks;
}

// need to figure out the scope for the this here
// explicit return
Elephant.prototype.trumpet = function() { return `${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!`}; // see if this works shouldn't need an explicit return because it's a one line function definitely learn all these things so fucking excited let's fucking do it

Elephant.prototype.grow = function() { this.height += 12 };
// what the fuck this works but
// Elephant.prototype.grow = () => this.height += 12; // didn't god fucking damn it
// ah fuck fat arrows don't have ANY scope so they have the same scope inside and out
// No idea what that means actually but also because fat arrow functions have no scope
// You can't reassign this or thinsg in it because it has no scope so this will always be
// what it was at time of declaration or some shit what the fuck jesus chris this is so hard

// need to figure out the syntax for this
Elephant.prototype.addTrick = function(trick) { this.tricks.push(trick) };

// fuck it all works but that's so hard lol
Elephant.prototype.play = function() { console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`)};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// getting the syntax down super lucky
function paradeHelper(elephant) {
	console.log(`${elephant.name} is trotting by!`)
};

herd.forEach((elephant) => paradeHelper(elephant));


// no idea if this is working correctly at all but jesus this is not going to be easy

// holy fuck you actually figured it out you literally return the FUNCTION
// you don't understand HOW it all works but you do start to see what you can do
// return the fucking function so that you can do things like let bfastOrder = dinerBreakfast();
// which lets you
function dinerBreakfast() {
	let order = "I'd like cheesy scrambled eggs please";

	return function (addition) {
		return order += ` and ${addition}`;
	}
};
