function page2() {
  gsap.to(".f-left-elem", {
    scrollTrigger: {
      trigger: "#f-images",
      pin: true,
      start: "top 10%",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".f-left-elem");
  Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });
}

page2();



function mobile() {
  const full = document.querySelector("#full-scr");

  // Toggle the element's position based on its current position
  if (full.style.top === "0px") {
    full.style.top = "-110%";
  } else {
    full.style.top = "0px";
  }
}

function headerMobile() {
  gsap.registerPlugin(ScrollTrigger);

  const cards = document.querySelectorAll(".card");
  const header = document.querySelector(".header");
  const animation = gsap.timeline();
  let cardHeight;

  function initCards() {
    animation.clear();
    cardHeight = cards[0].offsetHeight;
    cards.forEach((card, index) => {
      if (index > 0) {
        //increment y value of each card by cardHeight
        gsap.set(card, { y: index * cardHeight });
        //animate each card back to 0 (for stacking)
        animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
      }
    });
  }

  initCards();

  ScrollTrigger.create({
    trigger: ".wrapper",
    start: "15% 20%",
    pin: true,
    end: () => `+=${cards.length * cardHeight + header.offsetHeight}`,
    scrub: true,
    animation: animation,
    // markers:true,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.addEventListener("refreshInit", initCards);
}

headerMobile();
