    function text(topLeftX, topLeftY, color, sizeFont, message) { //shortcut for displaying text, instead of writing the code below just fill in the gaps in the brackets above
        canvasContext.font = sizeFont;
        canvasContext.fillStyle = color;
        canvasContext.fillText(message, topLeftX, topLeftY);
    }

    function colorRect(x, y, w, h, color) { //draws basic shapes, used for the background screen, and enemy bullet
        canvasContext.fillStyle = color;
        canvasContext.fillRect(x, y, w, h);
    }

    function drawImg(topLeftX, topLeftY, img, width, height) { //displays images, finds its src, then basic set up
        canvasContext.drawImage(img, topLeftX, topLeftY, width, height);
    }

    function drawAll() { //linked to main loop, so runs 1000/50
        colorRect(0, 0, canvas.width, canvas.height, "black"); //background
        text(2, 20, 'white', '14pt Century Gothic', "Your score is: " + score); //live scroe at the top of the screen
        text(canvas.width / 2 - 40, 20, 'white', '14pt Century Gothic', "Difficulty: " + level) //shows difficulty
        ship.drawplayerImage(); //the players ship
        if (lives == 3) { //the following is the health bar
            var one = drawImg(canvas.width - healthImgWidth - 1, health1Ypos, imageAssests.player, healthImgWidth, healthImgHeight);
        }
        if (lives >= 2) { //draws only if lives is equal or greater than 2
            var two = drawImg(canvas.width - healthImgWidth * 2 - 2, health1Ypos, imageAssests.player, healthImgWidth, healthImgHeight);
        }
        if (lives >= 1) {
            var three = drawImg(canvas.width - healthImgWidth * 3 - 3, health1Ypos, imageAssests.player, healthImgWidth, healthImgHeight);
        }
    }
