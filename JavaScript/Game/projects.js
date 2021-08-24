class Project {
  constructor() {
    this.img = "";
    this.fallSpeed = 10;
    this.size = Math.floor(canvas.width / 10);
    this.x = 0;
    this.y = 0;
  }

  assign() {
    let randX = Math.floor(Math.random() * (canvas.width - this.size));
    let randY = Math.floor(Math.random() * 160 + 100);
    let randSpeed = Math.floor(Math.random() * 10 + 4);
    let imgArr = [
      "habit",
      "snake",
      "bookingSystem",
      "journalism",
      "sudoku",
      "sort",
      "portfolio",
      "quiz",
    ];
    let randIndex = Math.floor(Math.random() * imgArr.length);
    this.img = imgArr[randIndex];
    this.x = randX;
    this.y = -randY;
    this.fallSpeed = randSpeed;
  }

  display() {
    let image = document.getElementById(this.img);
    ctx.drawImage(image, this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += this.fallSpeed;
  }
}
