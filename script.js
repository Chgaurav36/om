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

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var flag = 0;
menu.addEventListener("click", function()  {

  if (flag == 0 ) {
    full.style.top = 0;
    flag = 1;
  }else{
    full.style.top = "-100%";
    flag = 0;
  }
});


function navbar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
}

navbar();





