

var divCube = document.getElementById("cube");
divCube.style.transform = "translateY(500px)";

var element;
var e;



function moveElementYById(id, amount) {
    element = document.getElementById(id);
    element.style.transform = "translateY(" + amount + "px)";
}

function moveElementXById(id, amount) {
    element = document.getElementById(id);
    element.style.transform = "translateX(" + amount + "px)";
}


function moveElementByID(element ,x, y) {
    moveElementXById(element, x);
    moveElementYById(element, y);
}