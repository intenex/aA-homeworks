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

function fizzBuzz(array) {
  let fizzbuzz_array = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      fizzbuzz_array.push(element);
    }
  });
  return fizzbuzz_array;
}

// isPrime

// fucking works holy shit lmao just remember the for loops use the semicolon
// like for (i = 2; i < number; i++)
// and an explicit return anywhere will break the whole thing and return awesome
// remember the next and continue and all that too so lucky to remember all this so great

function isPrime(number) {
  for (i = 2; i < number; i++) { // won't run for 2 or less will never evaluate love it won't even run once
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Love it you killed the basic ones let's crush the next set now definitely get the whole syntax down. Super lucky

// sumOfNPrimes

// holy shit it works flawlessly you're so lucky to have just pushed to get it all done
// now it's all done and you still have enough time to get enough sleep so fucking lucky
// you're lucky to have just gotten better at programming and now you just have to become
// familiar with Javascript so lucky for that this is so great

function sumOfNPrimes(n) {
  let num_primes = 0;
  let sum_primes = 0;
  let last_prime = 2;
  while (num_primes < n) {
    while (isPrime(last_prime) === false) {
      ++last_prime;
    }
    ++num_primes;
    sum_primes += last_prime;
    ++last_prime;
  }
  return sum_primes;
}
