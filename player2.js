class Player {
    constructor(x,y,w,h,c,xSpeed,delay,delayRate) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.c = c;
                this.xSpeed = xSpeed;
                this.delay = delay;
                this.delayRate = delayRate;
                 }
    
        drawingPlayer() {
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x, this.y, this.w, this.h);
        }
    
        movePlayer(){
            if(leftKeyPressed){
                this.x -= this.xSpeed;
            if(this.x < 0) {
                this.x = 400;
            }
            }
            if(rightKeyPressed) {
                this.x += this.xSpeed;
                if(this.x > 400){
                    this.x = 0;
                }
            }
        }
}


function drawMakePlayer() {
    
        var p = new Player(pXpos, pYpos, WIDTH, HEIGHT, color, pXspeed);

        player.push(p);

    }