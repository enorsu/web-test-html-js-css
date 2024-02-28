

var divCube = document.getElementById("cube");
divCube.style.transform = "translateY(500px)";

document.onclick = doSimpleAnimation;

function doSimpleAnimation() {
    moveElementYById("cube", 100);
    moveElementXById("cube", 500);
    setTimeout(function() {
        moveElementYById("cube", 500);
        moveElementXByID("cube", 0);

    }, 1000);

}

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