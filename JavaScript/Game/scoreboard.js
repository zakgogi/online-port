class Scoreboard {
    constructor(){
        this.score = 0;
    }

    display (){
        let size = 0.03* window.innerWidth
        ctx.font = `${size}px serif`
        let width = canvas.width*0.01;
        ctx.fillText(this.score, width, width*6);
    }

    update (){
        this.score += 1;
    }

} 