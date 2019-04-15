/* jshint esversion: 6 */

function View($el) {
  this.$el = $el;
  this.setupEasel();
}

window._randomColorString = function(){
  return '#' + Math.random().toString(16).substr(-6);
};

View.prototype.exercise0 = function () {
  //Challenge: (example) remove the 'square' class from every li
  //Result: this should cause the grid to turn into a long list of undecorated lis
  //just a list of dots

  //this one completed as an example :) no additional code necessary
  $('li').removeClass("square");
};

View.prototype.exercise1 = function () {
  //Challenge: Give every square the class 'orange'
  //Result: Every square should turn orange (we already have a CSS rule)

  //your code here!
  $('li').addClass("orange");
};

View.prototype.exercise2 = function () {
  //Challenge: Remove every square
  //Result: Every square vanishes

  //your code here!
  $('li').remove(); // hmm why did they do the parent thing lol this works just straight love it
};

View.prototype.exercise3 = function () {
  //Challenge: Add an <h1> with the text 'i love jquery' under the grid.
  //Result: An <h1> with the text 'i love jquery' appears under the grid.

  //your code here!
  let $header = $("<h1 style='text-align: center'>i love jquery</h1>"); // creates a jQuery object of an HTMLElement that has that HTML so amazing good to have learned it so well at least that's key you didn't learn that much but the stuff you did you learned well which is very lucky keep pushing on the quiz for sure this is better for the long run not the tests for sure though though that stuff is great too so def get into it too
  // $('body').append("<h1 style='text-align: center'>i love jquery</h1>")
  $('body').append($header);
};

View.prototype.exercise4 = function () {
  //Challenge: Write your first name in every other square.
  //Result: Your name appears in every other square.

  //your code here!
  $('li:odd').text("ben"); // jfc jQuery is just SO easy lol it makes everything so crazy easy to do
};

View.prototype.exercise5 = function () {
  //Challenge: Alert the row and column of the square, when the square is clicked.
  //Result: When a square is clicked, the row and column appear in an alert. for
  //example: clicking the top left square should alert '0, 0'.
 
  //hint: checkout the addRow function at the bottom of the file: we set the
  //  'data-pos' of every square

  //your code here!
  let $allLis = $('li'); // get all the lis and data-pos to them and then alert it
  let allLis = Array.from($allLis);
  allLis.forEach(function(el, idx) { // ah don't think there's a forEach method on allLis rn lol
    let x = idx;
    let y = 0;
    if (idx >= 20) {
      x = idx % 20;
      y = Math.floor(idx/20);
    }
    let $el = $(el);
    $el.data('pos', [x, y]); // holy fuck it works lmao
  });
  $allLis.on("mouseover", () => {
    let $currentLi = $(event.currentTarget); // right must wrap it only jQuery objects have the .data and .on and all that fucking love it
    alert($currentLi.data('pos')); // love it 
  });
};

View.prototype.exercise6 = function () {
  //Challenge: Give every square a random color!
  //Result: Every square becomes a color as soon as this code runs. The grid
  //should become a beautiful rainbow of colors.

  //hint: use window._randomColorString() (defined at top) to get a random color!

  //your code here!
  $('li').each((idx, el) => { // the function first passes the index then the element which is an HTMLElement (an HTMLLiElement to be exact amazing lol)
    $(el).css('background-color', window._randomColorString()); // fucking amazing really getting the hang of jQuery which is the coolest fucking shit ever you really can do everything in the world must remember to wrap it up in the $(el) to make it a jQuery object to be able to call .css and shit on it so amazing
  });
};

View.prototype.exercise7 = function(){
  //Challenge: When your mouse goes over a square, console log its color.
  //Result: When the mouse goes over a square its color should appear in the
  //console. The color won't be the color's name, but its rbg value.
  //You should push the button for exercise 6 first to try it on the
  //rainbow.

  //your code here!
  $('li').on("mouseover", () => {
    console.log($(event.currentTarget).css('background-color')); // fucking love it exercise 5 was the hardest by far lmao but you fucking did it
  });
};



View.prototype.setupEasel = function() {
  const $addRowButton = $('<button>').html('Add a row');
  this.$el.append($addRowButton);
  $addRowButton.on("click", this.addRow.bind(this));

  for(let j = 0; j <= 7; j++){
    const $button = $("<button>").html("Exercise " + j);
    $button.on("click", this["exercise" + j]);
    this.$el.append($button);
  }

  for(let i = 0; i < 20; i ++) {
    this.addRow();
  }
};

View.prototype.addRow = function() {
  const rowIdx = this.$el.find(".row").length;
  const $row = $("<ul>").addClass("row").addClass("group");
  for(let colIdx = 0; colIdx < 20; colIdx++) {
    const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
    $square.on("mouseenter", (e) => {
      const $square = $(e.currentTarget);
      $square.css("background-color", window._randomColorString());
    });
    $row.append($square);
  }
  this.$el.append($row);
};

module.exports = View;
