//Nav Animation
gsap.from('nav', {opacity: 0, duration: 1, y: -100})

//Title Animation
gsap.from('.fadeInFirst', {opacity: 0, duration: 2, y: 100, delay: 1}); 
gsap.from('.fadeInSecond', {opacity: 0, duration: 2, x: -100, delay: 3});

//Bubble Animation
const pixels = window.innerHeight;
const bubble1Height = pixels + 105; 
const bubble2Height = pixels + 165;
const bubble3Height = pixels + 55;

gsap.to('.speed1b1', {
    duration: 14,
    delay: 2,
    x: 0,
    y: -bubble1Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 4
})

gsap.to('.speed2b1', {
    duration: 18,
    delay: 3,
    x: 0,
    y: -bubble1Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
})

gsap.to('.speed3b1', {
    duration: 10,
    delay: 1,
    x: 0,
    y: -bubble1Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 3
})

gsap.to('.speed4b1', {
    duration: 20,
    delay: 5,
    x: 0,
    y: -bubble1Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 1
})

gsap.to('.speed1b2', {
    delay: 3,
    duration: 25,
    x: 0,
    y: -bubble2Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 1
})

gsap.to('.speed2b2', {
    duration: 35,
    x: 0,
    y: -bubble2Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
})

gsap.to('.speed3b2', {
    delay: 8,
    duration: 15,
    x: 0,
    y: -bubble2Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
})

gsap.to('.speed1b3', {
    delay: 4,
    duration: 8,
    x: 0,
    y: -bubble3Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
})

gsap.to('.speed2b3', {
    delay: 1,
    duration: 5,
    x: 0,
    y: -bubble3Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
})

gsap.to('.speed3b3', {
    delay: 3,
    duration: 7,
    x: 0,
    y: -bubble3Height,
    ease: "none",
    repeat: -1,
    repeatDelay: 4
})
