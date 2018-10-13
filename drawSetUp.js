    function text(topLeftX,topLeftY,color, sizeFont, message){
        canvasContext.font = sizeFont;
        canvasContext.fillStyle = color;
        canvasContext.fillText(message, topLeftX, topLeftY);
    }

        function colorRect(x, y, w, h, color) {
            canvasContext.fillStyle = color;
            canvasContext.fillRect(x, y, w, h);
        }
    function drawImg(topLeftX,topLeftY,img,width,height) {
	   canvasContext.drawImage(img,topLeftX,topLeftY,width,height);
}