class Player {
    constructor(src,sx,sy,sw,sh,x,y,w,h,xSpeed) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.src = src;
                this.sx = sx;
                this.sy = sy;
                this.sw = sw;
                this.sh = sh;
                this.xSpeed = xSpeed;
                 }

        drawplayerImage(){
            canvasContext.drawImage(this.src, this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h);
        }
    
        movePlayer(){
            console.log(this.x)
            if(leftKeyPressed ){
                this.x -= this.xSpeed;
                if(this.x < 0) {
                    this.x = canvas.width;
                }
            }
            if(rightKeyPressed) {
                this.x += this.xSpeed;
                if(this.x > canvas.width){
                    this.x = 0;
                }
            }
        }
}

