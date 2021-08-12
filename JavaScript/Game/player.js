class Player {
    constructor(){ 
        this.width = Math.floor(canvas.width/7);
        this.height = this.width * 1.7;
        this.x = 0;
        this.y = canvas.height - this.height;
    }

    update(direction){

        switch(direction){
            case 'Left':
                if (this.x <= (canvas.width - this.width*7)){
                    this.x = canvas.width - this.width;
                } else {
                    this.x -= this.width;
                }
                break; 
            case 'Right':
                if (this.x >= canvas.width - this.width*2 ){
                    this.x = 0;
                } else {
                    this.x += this.width;
                }
                break;
            default:
                break;
        }   


    }

    display(){

        let image = document.getElementById('player');
        ctx.drawImage(image, this.x, this.y, this.width, this.height)

    }



}