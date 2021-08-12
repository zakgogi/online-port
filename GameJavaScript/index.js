const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let modalReplayBtn = document.getElementById('restartBtn');
modalReplayBtn.addEventListener('click', () => {
    window.location.reload();
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
        // project.display();
        player.display();
        for (let i = 0; i < projectSet.length; i++){
            projectSet[i].display();
            projectSet[i].update();
            if (projectSet[i].y > 820){
                projectSet[i].assign();
            }
            if (checkCollision(player, projectSet[i])){
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                projectSet = [];
                displayModal()
                
            }

        }
        
        // checkCollision();


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

window.addEventListener('keydown', (e) => {
    let direction = e.key.replace('Arrow', '');
    console.log(direction);
    player.update(direction);
})

drawGame();
