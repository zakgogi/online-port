class Player {
    constructor(){ 
        this.x = 0;
    }

    update(direction){

        switch(direction){
            case 'Left':
                if (this.x === 0){
                    this.x = 770;
                } else {
                    this.x -= 100;
                }
                break; 
            case 'Right':
                if (this.x === 770){
                    this.x = 0;
                } else {
                    this.x += 100;
                }
                break;
            default:
                break;
        }   


    }

    display(){

        let image = document.getElementById('player');
        ctx.drawImage(image, this.x, 710, 130, 200)
        // ctx.fillStyle = 'black';
        // ctx.fillRect(this.x, 875, 100, 25);

    }



}