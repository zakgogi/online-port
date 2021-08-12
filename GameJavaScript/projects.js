class Project {
    constructor(){
        this.x = 0;
        this.y = 80;
        this.img = "";
    }
    
    assign(){
        let randX = Math.floor(Math.random() * 720);
        let imgArr = [
            "https://images.pexels.com/photos/3886235/pexels-photo-3886235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/6975084/pexels-photo-6975084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/53140/snake-ball-python-python-regius-beauty-53140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.unsplash.com/photo-1614813231574-843cb1fb940b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.pexels.com/photos/6636324/pexels-photo-6636324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ]
        let randIndex = Math.floor(Math.random() * imgArr.length);
        this.img = imgArr[randIndex];
        this.x = randX;
    }

    display(){
        // let ctxImg = new Image();
        // ctxImg.src = this.img;
        // ctxImg.classList.add('ctxImg');
        // console.log(ctxImg);
        let image = document.getElementById('source');
        // ctx.fillStyle = '#c15e80';
        // ctx.fillRect(this.x, 0, 100, 25);
        ctx.drawImage(image, this.x, this.y)
    }

    // update(){
    //     this.y += 10;
    // }


}