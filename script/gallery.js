const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

gsap.registerPlugin(Flip);

const gallery = document.querySelector(".img-gallery-container");
const images = gsap.utils.toArray(".img");
const button = document.querySelector(".btn");
let rotationValues = [10, -5, 2, -2];
let isFlipped = false;

function applyRotation() {
  images.forEach((img, index) => {
    gsap.to(img, {
      rotate: isFlipped ? 0 : rotationValues[index] || 0, // Default to 0 if no rotation value
      duration: 2,
      ease: "cubic",
      delay: 0.155,
    });
  });
}

button.addEventListener("click", () => {
  isFlipped = !isFlipped;
  button.textContent = isFlipped ? "Hide Gallery" : "Explore Gallery";

  let state = Flip.getState(".img-gallery-container, .img");
  gallery.classList.toggle("order");
  images.forEach((img) => img.classList.toggle("reorder"));

  Flip.from(state, {
    absolute: true,
    duration: 2,
    rotate: 0,
    stagger: 0.05,
    ease: "cubic",
    onStart: applyRotation(),
    onComplete: scroller.update(),
  });
});

function triggerButtonClick() {
  button.click(); // Use the cached button variable
}

function mobile() {
  const full = document.querySelector("#full-scr");

  // Toggle the element's position based on its current position
  if (full.style.top === "0px") {
    full.style.top = "-110%";
  } else {
    full.style.top = "0px";
  }
}
