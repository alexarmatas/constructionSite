const nav = document.querySelector("nav");
const navLinks = document.querySelector(".navLinks");
const navchildNodes = navLinks.childNodes;
const bubble = document.querySelector(".bubble");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("slides");
  var texts = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  texts[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
