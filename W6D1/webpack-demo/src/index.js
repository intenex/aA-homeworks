import _ from 'lodash'; // fascinating that you can bind it as such
// basically assignment different syntax from require look into this more
// so much to learn in so little time actually is pretty nuts make sure
// that everything sticks for sure later

// man those brief moments where you see glimpses of the void in every day life
// one day you too will be gone from this earth. That's all there is to it.
// But first, the wonders you'll see and the things you'll do --

function component() {
    let element = document.createElement('div');

    // XXX Lodash (included via a script) is required for this line to work XXX
    // edit: instead requiring lodash with an import above, no implicit dependencies
    // and expilcit importation here now!
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

// ah right cool this will literally add a div tag with the text "Hello webpack"
// in it to the body of the index.html page lol
document.body.appendChild(component());