lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

function toggleContent(buttonId) {
  var content1 = document.getElementById("content1");
  var content2 = document.getElementById("content2");

  if (buttonId === "button1") {
    content1.classList.add("active");
    content2.classList.remove("active");
  } else if (buttonId === "button2") {
    content1.classList.remove("active");
    content2.classList.add("active");
  }
}

// function mobile() {
//   var menu = document.querySelector("nav h3");
//   var full = document.querySelector("#full-scr");
//   var flag = 0;
//   menu.addEventListener("click", function () {
//     console.log("Gaurav");
//     if (flag == 0) {
//       full.style.top = 0;
//       flag = 1;
//     } else {
//       full.style.top = "-100%";
//       flag = 0;
//     }
//   });
// }


function mobile() {
  var full = document.querySelector("#full-scr");
  var flag = 0;
    console.log("Gaurav");
    if (flag == 0) {
      full.style.top = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      flag = 0;
    }
  ;
}