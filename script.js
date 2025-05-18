import ScrollReveal from "scrollreveal";
import gsap from "gsap";
import SmoothScroll from "smooth-scroll";


const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});

gsap.from(".gallery-image", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

ScrollReveal().reveal('.gallery-image', {
    distance: '40px',
    duration: 900,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 150,
    opacity: 0,
    reset: false,
    cleanup: true
});