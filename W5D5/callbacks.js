function timeoutFunc() {
    alert('HAMMERTIME');
}

setTimeout(timeoutFunc, 5000); // it'll invoke it at the time that the function so definitely pass it without invoking it of course but how do you pass arguments to it hmmm

function hammerTime(time) {
    window.setTimeout(() => {alert(`${time} is hammertime!`);}, time); // don't need to explicitly say window.setTimeout() because scope should be correct but this should also be explicitly correct I think right
}

// man linters are incredibly good definitely watch the linter for semicolons the more you work with this
// the better you'll get at it for sure can't wait keep pushing for sure
// so lucky to have actually done the bootcamp now and to actually be able to become
// technical if you so choose - keep pushing for sure love this so much this is so fucking
// fulfilling to do this keep doing it all for sure

