const tl = gsap.timeline({delay: 0.3});
tl.from("nav", {opacity: 0, duration: 1, y: -100} )
tl.from("#bookingCard", {opacity: 0, duration: 0.3});
tl.from("#journalismCard", {opacity: 0, duration: 0.3});
tl.from("#sudokuCard", {opacity: 0, duration: 0.3});
tl.from("#snakeCard", {opacity: 0, duration: 0.3});
tl.from("#habitCard", {opacity: 0, duration: 0.3});
tl.from("#sortCard", {opacity: 0, duration: 0.3});
tl.from("#webCard", {opacity: 0, duration: 0.3});
tl.from("#toggleButton", {opacity: 0, duration: 0.8, y: -100})
