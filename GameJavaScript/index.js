const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let player;
let project;
let speed = 15;

const drawGame = () => {

    project = new Project();
    player = new Player();
    project.assign();
    
    window.setInterval(() => {
        
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
        project.display();
        player.display();
        // project.update();


        // checkCollision();



    }, 1000/speed)


}

window.addEventListener('keydown', (e) => {
    let direction = e.key.replace('Arrow', '');
    console.log(direction);
    player.update(direction);
})

drawGame();
