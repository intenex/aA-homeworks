console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success(data) { console.log(data); }, // right the response object is passed into the success function as data || Weird that this syntax might possibly work makes no sense lol the whole success: function() {} thing made way more sense but whatever
    error() { console.log('things failed sadly'); }
});

// wtf that syntax totally worked totally boggles your mind that that worked get way more into this today for sure

// Add another console log here, outside your AJAX request.

console.log('this runs first because AJAX is async so the success gets called only after the response object is received from the request and that is tossed in the event queue which necessarily must wait until all these other things execute first');

// the request gets sent immediately as soon as the $.ajax() thing is invoked I believe
// the response comes back whenever it is returned from the server that we pinged in the url call and the success/error callback is thrown in the task queue to execute once everything else completes first so amazing
// lol
// no
// put a type: 'POST' and send some specific data or some shit in a body to receive things back from POSTing some shit

// truly the best language love it so much