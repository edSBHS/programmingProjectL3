class bullet{
            constructor(x,y,w,h,c,ySpeed) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.c = c;
                this.ySpeed = ySpeed;
            }
            drawingBullet(){
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x, this.y, this.w, this.h);
            }
            move(){
                this.y -= this.ySpeed;
            }
            
}
function drawMake(){
           
            const BULLET_WIDTH = 5;
            const BULLET_HEIGHT = 12;
            var bulletXpos = shipXpos + SHIP_SIZE/2 - BULLET_WIDTH/2;
            var bulletYpos = shipYpos - BULLET_HEIGHT;;
            var bulletYspeed = 5;
            
            var b = new bullet(bulletXpos,bulletYpos,BULLET_WIDTH,BULLET_HEIGHT,'white',bulletYspeed);
            
            bullets.push(b);
        }