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
            
            if(Math.floor(changeDelay) >= 10){
                //console.log(this.sx);
                this.sx = 0;
                
            if(Math.floor(changeDelay) >= 20){
                changeDelay = 0;
               
               }
            else{
                this.sx = 43;
               
            }
               } 
           this.delay += this.delayRate;
            
            if(Math.floor(this.delay)% 5 == 0 && Math.floor(this.delay) != 0) {
                this.x += this.xSpeed;
                this.delay = 0;
                this.sx = 0;
               
                changeDelay += 1;

            }

        }

        enemyDrop(){
        if(this.y <= canvas.height){
            if(this.x > canvas.width - this.w || this.x < 0){
                this.y += (this.h * 3) + eGap+18;
                this.xSpeed *= -1;
                this.x += this.xSpeed;
            } 
        }
      else{
          
          delete enemies[i];
          return gameLost;
      }
    }
  }
    function drawMakeEnemies() {
  
        var eWidth = 35;
        var eHeight = 30;
        var eYspeed = 1;
        var eXspeed = 6;
        var delay = 0;
        var delayRate = 0.1;
        
        var eXpos = enemyCount * (eWidth + eGap);
        var eYpos = eHeight;
        var sourceW = 48;
        var sourceH = 31;
        var sourceY = 0;
        var sourceX = 0;
       

        //43 for nxt costume sx
        
       var e2Xpos = enemyCount * (eWidth + eGap) ;
        var e2Ypos = eHeight *2 + 10;
        var sourceX2 = 0;
        var sourceY2 = 0;
        var source2W = 85;
        var source2H = 85;
    
        var e3Xpos = enemyCount * (eWidth + eGap) ;
        var e3Ypos = eHeight *3 + 18;
        var sourceX3 = 0;
        var sourceY3 = 0;
        var source3W = 120;
        var source3H = 100;


        
   
        //this.src, this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h
        var e = new Enemy(enemy, sourceX, sourceY ,sourceW, sourceH, eXpos, eYpos, eWidth, eHeight,eXspeed,delay,delayRate);
        
//        var e2 = new Enemy(enemy2, sourceX2, sourceY2 ,source2W, source2H, e2Xpos, e2Ypos, eWidth, eHeight,eXspeed,delay,delayRate);
//        
//        var e3 = new Enemy(enemy3, sourceX3, sourceY3 ,source3W, source3H, e3Xpos, e3Ypos, eWidth, eHeight,eXspeed,delay,delayRate);

        

//        enemies.push(e3);
//       enemies.push(e2);
        enemies.push(e);
          enemyCount++;
    }

        
   
 
//        var e = new Enemy(enemy, sourceX, sourceY ,sourceW, sourceH, eXpos, eYpos, eWidth, eHeight,eXspeed,delay,delayRate);
//
//        enemies.push(e);
//          enemyCount++;
//    }
