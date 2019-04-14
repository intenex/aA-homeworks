document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    const ctx = canvas.getContext('2d'); // sets a basic Canvas 2d rendering context as per https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    // ctx.fillRect(100, 100, 200, 200); // amazing so lucky to get to try all this out 
    ctx.beginPath();
    // === path for circle ===
    // ctx.arc(100, 100, 25, 0, 2 * Math.PI); // 2π is 2 radians or 360 degrees - starts drawing at an angle of 0 degrees then goes to 360 for a full circle amazing
    ctx.moveTo(75, 50); // right start at 75x, 50y
    ctx.lineTo(100, 75); // make a line to 100x, 75y, so to the right and down 25px, right canvas starts in top left corner and all ys move down and x to the right makes sense yep
    ctx.bezierCurveTo(50, 100, 100, 100, 100, 20); // I have no idea how this works https://www.w3schools.com/tags/canvas_beziercurveto.asp look into this way more
    ctx.lineTo(100, 25); // then make a line up 50 px, then fill and it'll automatically connect the whole path back to the beginning amazing why so damn fuzzy though lol
    ctx.bezierCurveTo(50, 100, 100, 100, 100, 20);
    ctx.lineTo(50, 25);
    ctx.lineTo(75, 50); // if you don't line back it'll fill the whole thing but the border won't look right love it
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.stroke();
    ctx.fillStyle = "#2372C1"; // interesting it all has to be done in order can't do this before
    ctx.fill();
});

