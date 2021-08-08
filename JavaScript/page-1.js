//For eye animation following mouse
const eyeballLeft = document.getElementById('eyeballLeft');
const eyeballRight = document.getElementById('eyeballRight');
document.onmousemove = function(e){
    //find screen co ord as percentage and convert to decimal
    let percentageNumberX = e.clientX*100/window.innerWidth;
    let percentageNumberY = e.clientY*100/window.innerHeight;
    let percentageDecimalX = percentageNumberX/100;
    let percentageDecimalY = percentageNumberY/100

    //correct css % for eye position
    let percentX = -24 + percentageDecimalX*48;
    let percentY = -24 + percentageDecimalY*48;
    //horizontal eyeball movement
    eyeballLeft.style.left = `${percentX}%`;
    eyeballRight.style.left = `${percentX}%`;
    //vertical eyeball movement
    eyeballLeft.style.top = `${percentY}%`;
    eyeballRight.style.top = `${percentY}%`;

}

//gsap stuff

//Nav Animation
gsap.from('nav', {opacity: 0, duration: 1, y: -100});

//Paragraph Animation
gsap.from('#paraTop', {opacity: 0, duration: 1, y: -100, delay: 1});
gsap.from('#paraLeft', {opacity: 0, duration: 1, x: -100, delay: 2}); 
gsap.from('#paraRight', {opacity: 0, duration: 1, x: 100, delay: 3});  

//Person Animation
gsap.from('#centralPerson', {opacity: 0, duration: 1, y: 100, delay: 4});