class Player {
    constructor(){ 
        this.x = 0;
        this.velocity = 0;
    }

    update(direction){

        switch(direction){
            case 'Left':
                if (this.x === 0){
                    this.x = 800;
                } else {
                    this.x -= 100;
                }
                break; 
            case 'Right':
                if (this.x === 800){
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

        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, 875, 100, 25);


    }

}