    class Enemy {
        constructor(x, y, w, h, c, xSpeed, ySpeed, delay, delayRate) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
            this.xSpeed = xSpeed;
            this.ySpeed = ySpeed;
            this.delay = delay;
            this.delayRate = delayRate;

        }
        enemyMove(){
            this.x += this.xSpeed;
        }
        enemyDrop(){
            if(this.x > canvas.width - this.w || this.x < 0){
                this.y += this.h + eGap;
                this.xSpeed *= -1;
                this.x += this.xSpeed;
            }
            
        }
  
        drawingEnemy() {
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x, this.y, this.w, this.h);
        }

    }

    function drawMakeEnemies() {
  
        var eWidth = 10;
        var eHeight = 10;
        var eXpos = enemyCount * (eWidth + eGap);
        //console.log(eXpos);
        var eYpos = 0 + eHeight;
        var eYspeed = 1;
        var eXspeed = 1;
        var delay = 5;
        var delayRate = 0.1;
        var color = 'red';
      

        var e = new Enemy(eXpos, eYpos, eWidth, eHeight, color, eXspeed, eYspeed, delay, delayRate);

        enemies.push(e);
          enemyCount++;

    }
//class Player {
//    constructor(x,y,w,h,c,xSpeed,delay,delayRate) {
//                this.x = x;
//                this.y = y;
//                this.w = w;
//                this.h = h;
//                this.c = c;
//                this.xSpeed = xSpeed;
//                this.delay = delay;
//                this.delayRate = delayRate;
//                 }
//    
//        drawingPlayer() {
//            canvasContext.fillStyle = this.c;
//            canvasContext.fillRect(this.x, this.y, this.w, this.h);
//        }
//        movePlayer(){
//            this.x += this.xSpeed;
//        }
//}


//function drawMakePlayer() {
//  
//        var pWidth = 10;
//        var pHeight = 10;
//        var pXpos = 2;
//        var pYpos = 300;
//        var pYspeed = 1;
//        var pXspeed = 1;
//        var delay = 5;
//        var delayRate = 0.1;
//        var color = 'white';
//      
//
//        var p = new Player(pXpos, pYpos, pWidth, pHeight, color, pXspeed, pYspeed, delay, delayRate);
//
//        player.push(p);
//
//    }