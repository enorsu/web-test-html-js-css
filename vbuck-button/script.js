

var button1 = document.getElementById('btn1');
var ani1 = "transform: rotateX(100deg)";
var ani2 = "transform: rotateX(0deg)";
var ani3 = "translate: 90px 90px";

var intViewportWidth = window.innerWidth;
var intViewportHeight = window.innerHeight;

var randomY;
var randomX;

moveToRandomPosition();

button1.addEventListener("mouseover", moveToRandomPosition)

function moveToRandomPosition() {
    randomX = Math.floor(Math.random() * intViewportWidth);
    randomY = Math.floor(Math.random() * intViewportHeight);
    ani3 = "translate: " + randomX + "px "  + randomY + "px";
    button1.style.cssText = ani3;
}

button1.addEventListener("click", function() {
    alert("thats illegal and sorry you will to click ok for FREEBUCKS");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUTbmV2ZXIgZ29ubmEgZ2l2ZSB1cA%3D%3D";
});
