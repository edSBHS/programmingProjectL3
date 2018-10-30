class bullet { //class for bullets
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }
    drawingBullet() { //draw setup
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
    bulletMove() { //makes bullet go from the ship ypos up toward the top of the screen
        this.y -= this.ySpeed;
    }
    outOfBounds() { //if bullet is out of bounds
        return this.y < 0 || this.y > canvas.height;
    }
    hasHitItem(item) { //checks if bullet has hit player
        return ((this.x + this.w) >= item.x &&
                this.x <= (item.x + item.w)) //xcollision
            &&
            (this.y >= item.y &&
                this.y <= (item.y + item.h)); //ycollision
    }
    hasHitEnemy(enemy) { //if it has hit enemy
        return this.hasHitItem(enemy);

    }
    hasCollided() {
        var self = this;
        var collided = false;

        enemies.forEach(function (enemy, i) { //deletes enemy int he array 
            if (self.hasHitEnemy(enemy)) {
                delete enemies[i];
                collided = true;
                scoreIncrease = true; //means score will increase by one
            }
        });
        enemies = enemies.filter(item => item !== undefined); //clears array
        return collided;
    }
}

function drawBullet() { //draws bullet

    const BULLET_WIDTH = 3;
    const BULLET_HEIGHT = 12;
    var bulletXpos = ship.x + WIDTH / 2 - BULLET_WIDTH / 2;
    var bulletYpos = ship.y - BULLET_HEIGHT;
    var bulletYspeed = 5;

    var b = new bullet(bulletXpos, bulletYpos, BULLET_WIDTH, BULLET_HEIGHT, 'rgb(0,255 ,1', bulletYspeed); //set up for every bullet

    bullets.push(b); // pushes bullet set up into the array
}
