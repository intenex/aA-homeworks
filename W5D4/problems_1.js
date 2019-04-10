// Mystery scoping

/*
multi line comment!!!
*/

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    console.log(x);
    var x = 'in block'; // interesting this is in the same scope so overwrites the original var x right because vars are function scoped and consts and lets are block scoped amazing
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block'; // right constants and lets are block scoped amazing also you can't even overwrite another constant also right all conditionals are blocks okay making more sense now everything makes sense just grasp it
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block'; // very interesting can't overwrite the const and it attempts to since var is function scoped and not block scoped
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block'; // same as const
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    // console.log(x); can't do this x is not defined here ahh this is not a closure doesn't have access to free variables from the scope above holy fuck scoping in JS is tough need to learn it way more on your own time for sure
    let x = 'in block';  
    console.log(x);
  }
  x = 'out of block again'; // hmm can't say let twice this was originally let x = 'out of block again'
  console.log(x);
}

// madLib

function madLib(str1, str2, str3) {
  console.log(`We shall ${str1.toUpperCase()} the ${str2.toUpperCase()} ${str3.toUpperCase()}`);
}

// have to remember the () parentheses at the end otherwise you'll just return the function object and to interpolate do ${var_name} great

// isSubstring

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// JS Looping Constructs

// fizzBuzz

// isPrime

// sumOfNPrimes