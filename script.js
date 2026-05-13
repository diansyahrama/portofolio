// ===============================
// AOS INIT
// ===============================

AOS.init({
  duration: 1200,
  once: true
});

// ===============================
// GSAP LOADER
// ===============================

window.addEventListener("load", () => {

  gsap.to(".loader",{
    opacity:0,
    duration:1,
    delay:1,
    onComplete:()=>{
      document.querySelector(".loader").style.display="none";
    }
  });

});

// ===============================
// HERO ANIMATION
// ===============================

gsap.from(".hero h1",{
  y:100,
  opacity:0,
  duration:1.2
});

gsap.from(".hero p",{
  y:50,
  opacity:0,
  delay:.4,
  duration:1
});

gsap.from(".hero-buttons",{
  y:50,
  opacity:0,
  delay:.7,
  duration:1
});

gsap.from(".hero-image-card",{
  scale:.8,
  opacity:0,
  duration:1.3
});

// ===============================
// PROJECT FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    document
      .querySelector(".filters .active")
      .classList.remove("active");

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(card=>{

      if(filter === "all"){
        card.style.display = "block";
      } else {
        if(card.classList.contains(filter)){
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }

    });

  });

});

// ===============================
// TESTIMONIAL AUTO SLIDE
// ===============================

let testimonials = document.querySelectorAll(".testimonial-card");

let index = 0;

setInterval(()=>{

  testimonials.forEach(card=>{
    card.classList.remove("active");
  });

  index++;

  if(index >= testimonials.length){
    index = 0;
  }

  testimonials[index].classList.add("active");

},3000);

// ===============================
// CURSOR GLOW EFFECT
// ===============================

document.addEventListener("mousemove",(e)=>{

  const blur = document.querySelector(".blur1");

  blur.style.left = e.clientX - 150 + "px";
  blur.style.top = e.clientY - 150 + "px";

});