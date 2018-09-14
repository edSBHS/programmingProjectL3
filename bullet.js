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
        bulletMove(){
            this.y -= this.ySpeed;
        }
     outOfBounds(){
                return this.y < 0 || this.y > canvas.height || this.x < 0|| this.x > canvas.width;
            }
            hasHitItem(item){
                return ((this.x + this.w) >= item.x 
                        && this.x <= (item.x + item.w))//xcollision
                
                        && (this.y >=item.y 
                        && this.y <=(item.y + item.h));//ycollision
                       
            }
            hasHitEnemy(enemy) {
                return this.hasHitItem(enemy);
            }
            hasCollided(){
                var self = this;
                var collided = false;
                
                enemies.forEach(function(enemy, i) {
                    if(self.hasHitEnemy(enemy)) {
                        delete enemies[i];
                        collided = true;
                    }
                });
                enemies = enemies.filter(item => item !== undefined);
                return collided;
            }
        }        
    

function drawBullet(){

            const BULLET_WIDTH = 5;
            const BULLET_HEIGHT = 12;
            var bulletXpos = ship.x + WIDTH/2 - BULLET_WIDTH/2;
            var bulletYpos = ship.y - BULLET_HEIGHT;
            var bulletYspeed = 5;
             
            var b = new bullet(bulletXpos,bulletYpos,BULLET_WIDTH,BULLET_HEIGHT,'white',bulletYspeed);
            
            bullets.push(b);

        }