let imageBG = document.getElementById("bg");
let container = document.getElementById("container");
let imageBGBounds = imageBG.getBoundingClientRect();
let circle = document.getElementById("circle")
let circleBounds = circle.getBoundingClientRect();
window.onload = function() { sizeImage() }
window.addEventListener("resize", () => { sizeImage() });
  
function sizeImage() {
  let imageBGBounds = imageBG.getBoundingClientRect();
  let circleBounds = circle.getBoundingClientRect();
  let ratio = 320/853;
  let width = window.innerWidth;
  let height = width * ratio;
  imageBG.style.width = width+'px';
  container.style.width = width+'px';
  imageBG.style.height = height+"px";
  container.style.height = height+"px";
};



//https://stackoverflow.com/questions/67579549/how-to-add-a-css-animation-on-a-specific-point-in-a-picture