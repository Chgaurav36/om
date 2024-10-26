function mobile() {
    const full = document.querySelector("#full-scr");
  
    // Toggle the element's position based on its current position
    if (full.style.top === "0px") {
      full.style.top = "-110%";
    } else {
      full.style.top = "0px";
    }
  }