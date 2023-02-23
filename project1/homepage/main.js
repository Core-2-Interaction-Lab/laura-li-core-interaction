console.log("hello"); 


var triangle = document.querySelector('.triangle');
var triangle2 = document.querySelector('.triangle2');
var cube = document.querySelector('.cube')
let body = document.body;
var right = document.querySelector('.right');

function rotateLeft() {
    if (cube.classList.contains("rotateright")) {
        cube.classList.remove("rotateright");
        cube.classList.add("center");
      } else if (cube.classList.contains("center")) {
        cube.classList.remove("center")
        cube.classList.add("rotateleft") 
      } else {cube.classList.add("rotateleft") 
    }

}

function rotateRight() {
    if (cube.classList.contains("rotateleft")) {
        cube.classList.remove("rotateleft");
        cube.classList.add("center");
      } else if (cube.classList.contains("center")) {
        cube.classList.remove("center");
        cube.classList.add("rotateright")
      } else {
        cube.classList.add("rotateright");
      }
}



triangle.addEventListener("click", rotateLeft);
triangle2.addEventListener("click", rotateRight)
