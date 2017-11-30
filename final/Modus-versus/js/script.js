var bannerList = document.getElementsByClassName('banner-img');
var headings = document.getElementsByClassName('donec');
var i = 0;
var imageList = bannerList[i].children;
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var titleState=0;
var imgCounter = 0;
var maxImg = 2;
var minImg = 0;
bannerList[0].style.left = '0px';
var titleLeft = document.getElementById('leftChangeBanner');
var titleRight = document.getElementById('rightChangeBanner');
bannerList[0].width='4000px';
var lists1 =bannerList[0].children;
var navBtns =document.getElementsByClassName('nav-btns');
for(var k = 0 ; k<lists1.length;k++){
    lists1[k].style.width = 'auto';
    lists1[k].style.float = 'left';
}
var lists2 =bannerList[1].children;


for(var k = 0 ; k<lists2.length;k++){
    lists2[k].style.width = 'auto';
    lists2[k].style.float = 'left';
}

titleRight.onclick = function() {
    if (i !== (bannerList.length - 1)) {
        bannerList[i].style.display = 'none';
        headings[i].style.display = 'none';
        bannerList[i + 1].style.display = 'inline-block';
        titleState = i+1;
        bannerList[i+1].style.left = '0px';
        headings[i + 1].style.display = 'inline-block';
        i++;
        imageList = bannerList[i].children;
        imgCounter = 0;
    }


}
titleLeft.onclick = function() {
    if (i !== 0) {
        imgCounter = 0;
        bannerList[i].style.display = 'none';
        headings[i].style.display = 'none';
        bannerList[i - 1].style.display = 'inline-block';
        headings[i - 1].style.display = 'inline-block';
        titleState = i-1;
         bannerList[i-1].style.left = '0px';
        i--;
        imageList = bannerList[i].children;
        imgCounter = 0;

       
    }




}



next.addEventListener('click', function() {
    if (imgCounter < maxImg) {
        imgCounter++;

        bannerList[titleState].style.position = 'relative';
        var slideInterval = setInterval(function() {
            imageX = parseInt(bannerList[titleState].style.left);
            bannerList[titleState].style.left = imageX - 2 + '%'
            if (parseInt(bannerList[titleState].style.left) % 100 == 0) {
                clearInterval(slideInterval);
            }
        }, 2)
    }



})

prev.addEventListener('click', function() {
  if(imgCounter>minImg){
    imgCounter--;

    bannerList[titleState].style.position = 'relative';
    var slideInterval = setInterval(function() {
        imageX = parseInt(bannerList[titleState].style.left);
        bannerList[titleState].style.left = imageX + 2 + '%'
        if (parseInt(bannerList[titleState].style.left) % 100 == 0) {
            clearInterval(slideInterval);
        }
    }, 2)
  }
    




})











//--------start for related projects-----------------------------------


blockImages0 = ['images/mtn3.jpg', 'images/mtn1.jpg', 'images/mountain-2.jpg', 'images/blank.png'];
blockImages1 = ['images/mtn1.jpg', 'images/mountain-2.jpg', 'images/mtn3.jpg', 'images/blank.png'];
blockImages2 = ['images/mountain-2.jpg', 'images/blank.png', 'images/mtn1.jpg', 'images/mtn3.jpg'];
imageArray = [blockImages0, blockImages1, blockImages2];

blocks = document.getElementsByClassName('block');
left = document.getElementById('changeLeft');
right = document.getElementById('changeRight');
imgIndex = 0
maxI = 2;
minI = 0;

var removeImgs = function() {
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].removeChild(blocks[i].lastChild);
    }

}




var addImgs = function() {
    for (var i = 0; i < blocks.length; i++) {
        img = document.createElement('img');
        img.src = imageArray[imgIndex][i];
        blocks[i].appendChild(img);
    }
}


left.onclick = function() {
    if (imgIndex > minI) {
        imgIndex--;


        for (var i = 0; i < blocks.length; i++) {

            blocks[i].style.opacity = 1;
        }


        var interval = setInterval(function() {
                for (var i = 0; i < blocks.length; i++) {
                    var op = blocks[i].style.opacity;
                    op -= op * 0.1;
                    blocks[i].style.opacity = op;
                    if (blocks[i].style.opacity <= 0.1) {
                        clearInterval(interval);


                        removeImgs();
                        addImgs();
                        blocks[i].style.opacity = 1;
                    }

                }



            },
            60);
    }

}
right.onclick = function() {

    if (imgIndex < maxI) {
        imgIndex++;

        for (var i = 0; i < blocks.length; i++) {

            blocks[i].style.opacity = 1;
        }

        var state = 0;
        var interval = setInterval(function() {
                for (var i = 0; i < blocks.length; i++) {
                    var op = blocks[i].style.opacity;
                    op -= op * 0.1;
                    blocks[i].style.opacity = op;
                    if (blocks[i].style.opacity <= 0.1) {
                        clearInterval(interval);
                        state = 1;
                        removeImgs();
                        addImgs();
                        blocks[i].style.opacity = 1;

                    }

                }



            },
            60);



    }


}

addImgs();