class Scoreboard {
    constructor(){
        this.score = 0;
    }

    display (){
        ctx.font = "3rem serif"
        let width = canvas.width*0.01;
        ctx.fillText(this.score, width, width*6);
    }

    update (){
        this.score += 1;
    }

} 