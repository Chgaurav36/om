lightbox.option({
  resizeDuration: 200,
  fadeDuration: 100,
  wrapAround: true,
  disableScrolling: true,
  showImageNumberLabel: true,
});





function toggleContent(buttonId) {
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  // Toggle active class based on buttonId
  const isButton1 = buttonId === "button1";
  content1.classList.toggle("active", isButton1);
  content2.classList.toggle("active", !isButton1);

  // Change button background color
  button1.style.backgroundColor = isButton1 ? "red" : "";
  button2.style.backgroundColor = !isButton1 ? "red" : "";
}





function mobile() {
  const full = document.querySelector("#full-scr");

 
  if (full.style.top === "0px") {
    full.style.top = "-110%";
  } else {
    full.style.top = "0px";
  }
}




// Initialize Lenis
const lenis = new Lenis({
  smooth: true,         // Enable smooth scrolling
  direction: 'vertical' // Scroll direction (horizontal is also possible)
});

// Animation loop to update Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
