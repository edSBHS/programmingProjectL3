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

function drawEnemyBullet(){

            const ENEMY_BULLET_WIDTH = 3;
            const ENEMY_BULLET_HEIGHT = 12;
            var enemyBulletYpos = 0;
            var enemyBulletYspeed = 5;
    
        var bulletTotal = 4;
            //console.log(enemyBulletXpos);
    
        for(i=0;i<bulletTotal;i++){
            var enemyBulletXpos = Math.floor((Math.random() * 400) + 1);
//            var bulletSpacing = 0;
            var eb = new enemyBullet(enemyBulletXpos,enemyBulletYpos,ENEMY_BULLET_WIDTH,ENEMY_BULLET_HEIGHT,"white",enemyBulletYspeed);
            bulletSpacing = 10;
            

//            var eb2 = new enemyBullet(enemyBulletXpos-bulletSpacing,enemyBulletYpos,ENEMY_BULLET_WIDTH,ENEMY_BULLET_HEIGHT,"white",enemyBulletYspeed);
    
           // enemybullets.push(eb2);
            enemybullets.push(eb);
        }
        }