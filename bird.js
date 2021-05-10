class bird {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
       
        this.a = createSprite(this.x, this.y, this.width, this.height)
        this.a.addImage(birdimg)
    }
    display() {
       
        if (keyDown("space")) {
            this.a.velocityY=-10
         
        }
        this.a.velocityY+=0.8
    }
    end(){
        text("game over",500,250)
    }



}