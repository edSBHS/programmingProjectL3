    class Enemy {

    constructor(src,sx,sy,sw,sh,x,y,w,h,xSpeed,delay,delayRate) {
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
                this.delay = delay;
                this.delayRate = delayRate;
                 }
    

        drawingEnemy(){
            canvasContext.drawImage(this.src, this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h);
        }
    
        enemyMove(){
            this.delay += this.delayRate;
            console.log(this.delay);
            if(Math.floor(this.delay)% 5 == 0 && Math.floor(this.delay) != 0) {
                this.x += this.xSpeed;
                this.delay = 0;
                console.log('moving');
            }
            
            
        }
        enemyDrop(){
            if(this.x > canvas.width - this.w || this.x < 0){
                this.y += (this.h * 2) + eGap;
                this.xSpeed *= -1;
                this.x += this.xSpeed;
            }
            
        }
  

    }

    function drawMakeEnemies() {
  
        var eWidth = 35;
        var eHeight = 30;
        var eXpos = enemyCount * (eWidth + eGap);
        var eYpos = 0;
        var eYspeed = 1;
        var eXspeed = 1;
        var delay = 0;
        var sourceX = 50;
        var sourceY = 31;
        var delayRate = 0.1;
      
        var e2Xpos = enemyCount * (eWidth + eGap);
        var e2Ypos = 0 + eHeight;
        var sourceX2 = 50;
        var sourceY2 = 50;
        var e2Width = 35;
        var e2Height = 30;
        
        var e = new Enemy(enemy, 0, 0, sourceX, sourceY, eXpos, eYpos, eWidth, eHeight,eXspeed,delay,delayRate);
        var e2 = new Enemy(enemy2, 0,0,sourceX2,sourceY2,e2Xpos,e2Ypos,e2Width,e2Height,eXspeed,delay,delayRate);
        enemies.push(e2);
        enemies.push(e);
          enemyCount++;

    }
