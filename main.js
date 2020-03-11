//Index Slider

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

//Transition Effects
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

//Gallery Images
function imgClick(e) {
  current.src = e.target.src;
}

function galleryLoad() {
  //Roofs Gallery
  const currentRoof = document.querySelector("#current-roof");
  const imgsRoofing = document.querySelectorAll(".imgs-roofing img");
  const opacity = 0.6;
  imgsRoofing[0].style.opacity = opacity;

  imgsRoofing.forEach(img => {
    img.addEventListener("click", e => {
      imgsRoofing.forEach(img => {
        img.style.opacity = 1;
      });
      currentRoof.src = e.target.src;
      //add fade class
      currentRoof.classList.add("fade-gallery");
      //remove fade class after .5s
      setTimeout(() => currentRoof.classList.remove("fade-gallery"), 500);
      e.target.style.opacity = opacity;
    });
  });

  const currentBathroom = document.querySelector("#current-bathroom");
  const imgsBathroom = document.querySelectorAll(".imgs-bathroom img");
  imgsBathroom[0].style.opacity = opacity;

  imgsBathroom.forEach(img => {
    img.addEventListener("click", e => {
      imgsBathroom.forEach(img => {
        img.style.opacity = 1;
      });
      currentBathroom.src = e.target.src;
      currentBathroom.classList.add("fade-gallery");
      setTimeout(() => currentBathroom.classList.remove("fade-gallery"), 500);
      e.target.style.opacity = opacity;
    });
  });
}
