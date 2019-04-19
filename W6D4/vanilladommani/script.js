document.addEventListener("DOMContentLoaded", () => { // need an event listener because the script tag is in the head
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") { // interesting so you can get all the classNames with .className
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  // you want to basically prevent default with an event listener on the form
  // then append the li object

  const visitFormEl = document.getElementById("visit-form");
  visitFormEl.addEventListener("submit", visitFormCallback);

  function visitFormCallback(event) {
    event.preventDefault();

    const visitFormInput = document.getElementsByClassName("favorite-input"); // yeah not ideal not sure why they didn't give it a class name
    const visitInputVal = visitFormInput[0].value;
    visitFormInput[0].value = ""; // crazy that this instantly resets that value and 'saves' it to the browser immediately right --> these operate DIRECTLY on the DOM, not a virtual DOM state that is then reconciled with the actual DOM like React does, fucking love it man actually LOVE learning this shit so excited to learn on your own let's keep at it :). Pairing would keep you on point a lot more but you've only got one more week of material, you'll get through it :). Can't fucking wait. Totally fine to skip AJAX for now lol everyone else did anyway

    const placesUl = document.getElementById("sf-places");
    const newPlaceLi = document.createElement("li");
    newPlaceLi.textContent = visitInputVal;

    placesUl.appendChild(newPlaceLi); // ah so fun man love this life. Revisit this stuff later for sure move on for now. The most important thing is to get through all the material once and get to your final project then circle back and do everything for sure on the second run through love it
  }

  // adding new photos

  // --- your code here!

  // different way to name the function name a variable and set it equal to an anonymous function love it
  const dogButtonCallback = function () { // god damn these linters are amazing. Having this technology is an absolutely utopic thing and unbelievable
    const dogFormDiv = document.getElementsByClassName("photo-form-container")[0]; // why the fuck are they using classes and not IDs
    const dfClasses = dogFormDiv.classList;
    dfClasses.contains('hidden') ? dfClasses.remove('hidden') : dfClasses.add('hidden'); // amazing this ternary works
  };

  const dogButton = document.getElementsByClassName('photo-show-button')[0];
  dogButton.addEventListener("click", dogButtonCallback); // will this add an event listener to every object in the collection? Time will tell --> update yep nope that doesn't work lol

  const dogFormDiv = document.getElementsByClassName("photo-form-container")[0];
  const dogForm = dogFormDiv.children[0]; // oh shit text are nodes and so not the first child amazing lol what you want is .children https://www.w3schools.com/jsref/prop_element_children.asp

  dogForm.addEventListener("submit", dogFormCallback); // works flawlessly now love it

  function dogFormCallback(event) {
    event.preventDefault();

    console.log('hi');
    const dfInput = dogForm.children[0];
    const dfInputVal = dfInput.value;
    dfInput.value = "";

    const dogList = document.getElementsByClassName('dog-photos')[0];
    const newLi = document.createElement('li');
    const newDogImg = document.createElement('img');
    newDogImg.src = dfInputVal; // so lucky to literally just get it all and to know how to understand the stuff sufficiently to do it all
    newLi.appendChild(newDogImg);
    dogList.appendChild(newLi);
  }

});
