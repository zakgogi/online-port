const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let modalReplayBtn = document.getElementById('restartBtn');
modalReplayBtn.addEventListener('click', () => {
    let modal = document.getElementById('gameModal');
    modal.style.display = "none";
    drawGame();
});
let player;
let project;
let speed = 15;



const drawGame = () => {

    let projectSet = [];
    for (let i = 0; i < 5; i++){
        project = new Project()
        project.assign()
        projectSet.push(project);
    }
    // project = new Project();
    player = new Player();
    // project.assign();
    
    const gameLoop = window.setInterval(() => {
        
        ctx.clearRect(0, 0 , canvas.width, canvas.height);

        player.display();
        for (let i = 0; i < projectSet.length; i++){
            projectSet[i].display();
            projectSet[i].update();
            if (projectSet[i].y > 820){
                projectSet[i].assign();
            }
            if (checkCollision(player, projectSet[i])){
                let collidedImg = projectSet[i].img;
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                projectSet = [];
                window.clearInterval(gameLoop);
                displayModal(collidedImg);
                
            }

        }


    }, 1000/speed)

}

const checkCollision = (player, project) => {
    let playerMaxX = player.x + 130;
    let projectMaxX = project.x + 80;
    if ((project.x >= player.x && project.x <= playerMaxX) || (projectMaxX <= playerMaxX && projectMaxX >= player.x)){
        if (project.y > 690){
            return true
        } else {
            return false
        }
    }

    return false;
}

const displayModal = (word) => {
    let modal = document.getElementById('gameModal');
    modal.style.display = "block";
    console.log(word);
}


window.addEventListener('keydown', (e) => {
    let direction = e.key.replace('Arrow', '');
    console.log(direction);
    player.update(direction);
})

// drawGame();
const startButton = document.getElementById('gameStart');
startButton.addEventListener('click', drawGame);