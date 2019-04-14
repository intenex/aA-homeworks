document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    const ctx = canvas.getContext('2d'); // sets a basic Canvas 2d rendering context as per https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.fillStyle = "#2372C1";
    ctx.fillRect(100, 100, 200, 200); // amazing so lucky to get to try all this out
});
