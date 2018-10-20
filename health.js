    function loadImgAssests() {
        imgs = {};
        
        imgs.player = new Image();
        imgs.player.src = "images/ship.jpg";
        
        imgs.logo = new Image();
        imgs.logo.src = "images/logo.jpg";
        
        return imgs;
            }

        var healthImgWidth = 20;
        var healthImgHeight = 20;
        var health1Ypos = 4;
        var healthImgGap = 5;
