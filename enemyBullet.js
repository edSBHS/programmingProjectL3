class enemyBullet{
            constructor(x,y,w,h,c,ySpeed) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.c = c;
                this.ySpeed = ySpeed;
            }
    
            drawingEnemyBullet(){
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x, this.y, this.w, this.h);
            }

        enemyBulletMove(){
            this.y += this.ySpeed;
            //console.log("hi");
        }
     outOfBounds(){
                return this.y > canvas.height;
            }

        }        
    
var enemyBulletXpos = Math.floor((Math.random() * 400) + 1);
function drawEnemyBullet(){

            const ENEMY_BULLET_WIDTH = 3;
            const ENEMY_BULLET_HEIGHT = 12;
            var enemyBulletYpos = 0;
            var enemyBulletYspeed = 5;
            //console.log(enemyBulletXpos);
            var eb = new enemyBullet(enemyBulletXpos,enemyBulletYpos,ENEMY_BULLET_WIDTH,ENEMY_BULLET_HEIGHT,"white",enemyBulletYspeed);

            enemybullets.push(eb);
        }