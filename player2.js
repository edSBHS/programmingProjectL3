        var rightKeyPressed = false;
        var leftKeyPressed = false;
        var spaceKeyPressed = false;

        const RIGHT = 39;
        const LEFT = 37;
        const SPACE = 32;

class Player {//player class
    constructor(src, sx, sy, sw, sh, x, y, w, h, xSpeed) {
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

    drawplayerImage() {//player set up
        canvasContext.drawImage(this.src, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
    }

    movePlayer() {//player movement
        if (leftKeyPressed) {//if left arrow pressed
            this.x -= this.xSpeed;//change xpos by negative speed, so it moves to the left
            if (this.x < 0) {//loop code
                this.x = canvas.width;
            }
        }
        if (rightKeyPressed) {//same as left but for right
            this.x += this.xSpeed;
            if (this.x > canvas.width) {
                this.x = 0;
            }
        }
    }
    hasHitEnemy(item) {
        return ((this.x + this.w) >= item.x &&
                this.x <= (item.x + item.w)) //xcollision
            &&
            (this.y >= item.y &&
                this.y <= (item.y + item.h)); //ycollision
    }

    hasHitPlayer(playerShip) {
        return this.hasHitItem(enemybullet);

    }
    hasCollided() {//collided code
        var self = this;
        var collided = false;

        enemybullets.forEach(function (enemybullet, i) {
            if (self.hasHitEnemy(enemybullet)) {

                if (enemybullet.y + enemybullet.h > self.y) { // has collided with playership xy 
                    enemybullet.y = canvas.height;//changes ypos so it is below the screen, so it will delete
                    lives--;//changes lives by -1
                    console.log(enemybullet.y);
                }
                if (lives == 1) {//code for the different sprites from normal ship
                    console.log("hi");
                    self.sx = 170;
                }
                if (lives == 2) {//ship with damage
                    self.sx = 85;
                    console.log(self.sx);
                }
                if (lives == 3) {//nearly dead
                    self.sx = 0;
                }
                collided = true;
            }
        });
        return collided;

    }
}

function keyPressed(evt) {//checks if the player has pressed the keys
    if (evt.keyCode == RIGHT) {
        rightKeyPressed = true;
    }
    if (evt.keyCode == LEFT) {
        leftKeyPressed = true;
    }
    if (evt.keyCode == SPACE) {//if player presses spacebar
        if (playerBulletDelay) {//and delay is true so bullet cant be shot constantly
            drawBullet();//run draw function
            playerBulletDelay = false;
            console.log(playerBulletDelay);
        }
        spaceKeyPressed = true;
    }
}

function keyReleased(evt) {//if released everything gets changed to false
    if (evt.keyCode == RIGHT) {
        rightKeyPressed = false;
    }
    if (evt.keyCode == LEFT) {
        leftKeyPressed = false;
    }
}
