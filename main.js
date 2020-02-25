const nav = document.querySelector("nav");
const navLinks = document.querySelector(".navLinks");
const navchildNodes = navLinks.childNodes;
const bubble = document.querySelector(".bubble");

//Navbar Function
function setBubble() {
  const coords = this.getBoundingClientRect();
  const directions = {
    height: coords.height,
    width: coords.width,
    top: coords.top,
    left: coords.left
  };
  bubble.style.opacity = 1;
  bubble.style.setProperty("left", `${directions.left}px`);
  bubble.style.setProperty("top", `${directions.top}px`);
  bubble.style.setProperty("width", `${directions.width}px`);
  bubble.style.setProperty("height", `${directions.height}px`);
}

nav.addEventListener("mouseleave", () => {
  navchildNodes.forEach(node => {
    if (node.nodeType == 1) {
      node.removeEventListener("mouseover", setBubble);
    }
  });
  bubble.style.opacity = 0;
});

nav.addEventListener("mouseover", () => {
  navchildNodes.forEach(node => {
    if (node.nodeType == 1) {
      if (node.tagName == "LI") {
        node.addEventListener("mouseover", setBubble);
      }
    }
  });
});

//Slide Functionality
var slideIndex = 1;

//next / previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail image control
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    console.log(slideIndex);
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
