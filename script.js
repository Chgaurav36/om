var redirectButton = document.getElementById('gallery-page');

    // Add click event listener to the button
    redirectButton.addEventListener('click', function() {
      // Redirect to the next page
      window.location.href = 'http://127.0.0.1:5500/pages/gallery.html'; 
    });
function page2(){
gsap.to(".f-left-elem", {
        scrollTrigger:{
            trigger: "#f-images",
            pin:true,            
            start: "top 10%",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1        
    },
        y: "-300%",
        ease: Power1
    })
    
    let sections = document.querySelectorAll(".f-left-elem");
    Shery.imageEffect(".images", {
        style: 4,
        config: {onMouse: {value: 1}},
        slideStyle: (setScroll) => {
          sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                    
                }
            })
          })
        }
      });

    }

page2();

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
menu.addEventListener("click", () => {
    full.style.top = 0;
});





