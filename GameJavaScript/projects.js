class Project {
    constructor(){
        this.x = 0;
        this.y = 80;
        this.img = "";
        this.fallSpeed = 10;
    }
    
    assign(){
        let randX = Math.floor(Math.random() * 720);
        let randY = Math.floor(Math.random() * 160 + 100);
        let randSpeed = Math.floor(Math.random() * 10 + 4);
        let imgArr = ['habit','snake','bookingSystem', 'journalism', 'sudoku'];
        let randIndex = Math.floor(Math.random() * imgArr.length);
        this.img = imgArr[randIndex];
        this.x = randX;
        this.y = -randY;
        this.fallSpeed = randSpeed
    }

    display(){
        let image = document.getElementById(this.img);
        ctx.drawImage(image, this.x, this.y, 80, 80)
    }

    update(){
        this.y += this.fallSpeed;
    }


}