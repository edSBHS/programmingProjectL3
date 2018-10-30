class enemyBullet { //enemy bullet class set up
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }
    drawingEnemyBullet() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
    enemyBulletMove() { //moves from the top of the screen down
        this.y += this.ySpeed;
    }
    outOfBounds() { //if bullet goes out of the screen
        return this.y > canvas.height;
    }
}
var shootingDelay = Math.floor(Math.random() * 10); //random delay inbetween shots

function enemyBulletShooting() {

    if (shootingDelay <= Math.floor(Math.random() * 20) + 10) {
        shootingDelay = shootingDelay + 0.1;
    } else {
        drawEnemyBullet();
        shootingDelay = 0;
    }
}

function drawEnemyBullet() {
    const ENEMY_BULLET_WIDTH = 3;
    const ENEMY_BULLET_HEIGHT = 12;
    var enemyBulletYpos = 1;
    var enemyBulletYspeed = 5;

    if (level == "hard") {
        var bulletTotal = Math.floor((Math.random() * 6) + 2); //more bullets for hard
    } else {
        var bulletTotal = Math.floor((Math.random() * 4) + 1); //random between 1 and 4 bullets
    }

    for (i = 0; i < bulletTotal; i++) { // will run the amount of times the bullet total equals
        var enemyBulletXpos = Math.floor((Math.random() * canvas.width) + 1); // random, xpos 
        var eb = new enemyBullet(enemyBulletXpos, enemyBulletYpos, ENEMY_BULLET_WIDTH, ENEMY_BULLET_HEIGHT, "white", enemyBulletYspeed);
        //bulletSpacing = 10;

        enemybullets.push(eb); //pushes enemybullet into the array
    }
}
