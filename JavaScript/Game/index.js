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
let scoreboard;
let projectNumber = 6;
let speed = 15;

const drawGame = () => {

    let projectSet = [];
    for (let i = 0; i < projectNumber; i++){
        project = new Project()
        project.assign()
        projectSet.push(project);
    }

    player = new Player();
    scoreboard = new Scoreboard();
    
    const gameLoop = window.setInterval(() => {
        
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
        scoreboard.display();
        player.display();
        for (let i = 0; i < projectSet.length; i++){
            projectSet[i].display();
            projectSet[i].update();
            if (projectSet[i].y > (canvas.height - projectSet[i].size)){
                projectSet[i].assign();
                scoreboard.update();
            }
            if (checkCollision(player, projectSet[i])){
                let collidedImg = projectSet[i].img;
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                projectSet = [];
                window.clearInterval(gameLoop);
                displayModal(collidedImg, scoreboard.score);
                
            }

        }


    }, 1000/speed)

}

const checkCollision = (player, project) => {
    let playerMaxX = player.x + player.width;
    let projectMaxX = project.x + project.size;
    if ((project.x >= player.x && project.x <= playerMaxX) || (projectMaxX <= playerMaxX && projectMaxX >= player.x)){
        if (project.y + project.size - 10 > (player.y)){
            return true
        } else {
            return false
        }
    }

    return false;
}

const displayModal = (word, score) => {
    let modal = document.getElementById('gameModal');
    modal.style.display = "block";
    let existingH3 = document.querySelectorAll('#gameModal h3');
    if (existingH3.length === 2){
        existingH3[0].textContent = `You scored ${score}.`
        existingH3[1].textContent = `You got hit by the ${word} project..`
    } else {
        let h31 = document.createElement('h3');
        let h32 = document.createElement('h3');
        h31.textContent = `You scored ${score}.`;
        h32.textContent = `You got hit by the ${word} project..`;
        modal.append(h31);
        modal.append(h32);
    }
    let existingButton = document.querySelector('#gameModal #showProject');
    if (existingButton){
        existingButton.remove();
        let button = document.createElement('button');
        button.textContent = "Check it out here";
        button.id = "showProject"
        button.addEventListener('click', () => {
            fillModal(word)
        })
        modal.append(button);
    } else {
        let button = document.createElement('button');
        button.textContent = "Check it out here";
        button.id = "showProject"
        button.addEventListener('click', () => {
            fillModal(word)
        })
        modal.append(button);
    }
}


window.addEventListener('keydown', (e) => {
    let direction = e.key.replace('Arrow', '');
    console.log(direction);
    player.update(direction);
})

const startDiv = document.getElementById('start');
const startButton = document.getElementById('gameStart');
const startPara = document.getElementById('startParaSection');
startButton.addEventListener('click', () => {
    startDiv.style.display = "none";
    startPara.style.display = "none";
    drawGame()
});