const utils = {
    getRandom: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
}
let main = document.getElementById('puzzle-wrapper');
let elements = [];

const C_WIDTH = 650;
const C_HEIGHT = 500;

class Game {
    constructor(canvasId) {
        let canvas = document.getElementById(canvasId);
        let elemLeft = canvas.offsetLeft;
        let elemTop = canvas.offsetTop;

        canvas.addEventListener('click', function(event) {
            var x = event.pageX - elemLeft,
                y = event.pageY - elemTop;
            elements.forEach((element) => {
                if (y > element.top && y < element.top + element.height &&
                    x > element.left && x < element.left + element.width) {
                    element.top=element.top+100;
                }
            })
        }, false);

        canvas.width = C_WIDTH;
        canvas.height = C_HEIGHT;
        canvas.style.margin = 'auto';
        canvas.style.border = '#000 1px solid';
        this.ctx = canvas.getContext('2d');
        this.bgImg = new Image();
        this.bgX = 0;
        this.bgImg.style.width = C_WIDTH;
        this.bgImg.style.height = C_HEIGHT;
        this.bgImg.src = 'images/riddle-bg.png';



        this.bgImg.onload = () => {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctx.drawImage(this.bgImg, this.bgX, 0, canvas.width, canvas.height);

        }
    }

    init() {
        this.saint1 = new Saint(this.ctx, 30);
        this.saint2 = new Saint(this.ctx, 50);
        this.saint3 = new Saint(this.ctx, 70);
        this.devil1 = new Devil(this.ctx, 80);
        this.devil2 = new Devil(this.ctx, 120);
        this.devil3 = new Devil(this.ctx, 160);
        this.boat = new Boat(this.ctx);
        this.go = new Go(this.ctx);
    }


}

class Saint {
    constructor(ctx, saintLeft) {
        this.saintImg = new Image();
        this.saintImg.src = 'images/1saint.png';
        this.saintImg.left = saintLeft;
        this.type = 'saint';
        this.saintImg.top = 225;
        this.saintImg.onload = () => {
            ctx.drawImage(this.saintImg, this.saintImg.left, this.saintImg.top);

            elements.push(this.saintImg);
        }
    }
}




class Devil {
    constructor(ctx, devilLeft) {
        this.devilImg = new Image();
        this.devilImg.src = 'images/1devil.png';
        this.devilImg.left = devilLeft;
        this.devilImg.top = 215;
        this.devilImg.onload = () => {
            ctx.drawImage(this.devilImg, this.devilImg.left, this.devilImg.top);
            elements.push(this.devilImg);
        }
    }

}

class Boat {
    constructor(ctx) {
        this.boatImg = new Image();
        this.boatImg.src = 'images/1boat.png';
        this.boatImg.left = 200;
        this.boatImg.top = 200;
        this.boatImg.onload = () => {
            ctx.drawImage(this.boatImg, this.boatImg.left, this.boatImg.top);
            elements.push(this.boatImg);
        }
    }

}


class Go {
    constructor(ctx) {
        this.goBtn = new Image();
        this.goBtn.src = 'images/go-btn.png';
        this.goBtn.left = C_WIDTH / 2 - 20;
        this.goBtn.top = 100;
        this.goBtn.onload = () => {
            ctx.drawImage(this.goBtn, this.goBtn.left, this.goBtn.top);
            elements.push(this.goBtn);
        }
    }
}

let game = new Game('myCanvas');
game.init();