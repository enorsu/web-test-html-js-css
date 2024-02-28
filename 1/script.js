

var button1 = document.getElementById('btn1');
var ani1 = "transform: rotateX(100deg)";
var ani2 = "transform: rotateX(0deg)";
var ani3 = "translate: 90px 90px";

var randomY;
var randomX;


button1.addEventListener("mouseover", function() {
    randomX = Math.floor(300 + Math.random() * 600);
    randomY = Math.floor(300 + Math.random() * 600);
    ani3 = "translate: " + randomX + "px "  + randomY + "px";
    button1.style.cssText = ani3;
});


button1.addEventListener("click", function() {
    alert("thats illegal");
});
