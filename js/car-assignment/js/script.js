function ship(parent) {
    this.element = document.createElement('div');
    this.position=0;
    this.element.style.width = "74px";
    this.element.style.height = "181px";
    this.element.style.backgroundImage = 'url("images/space-ship.png")';
    this.element.style.position = "absolute";
    this.element.style.left = "215px";
    this.element.style.bottom = "0px";
    this.x = parseInt(this.element.style.left);
    this.y = parseInt(this.element.style.bottom);

    this.moveLeft = function() {

        this.dx = -130;
        this.y = 0;
        if (this.x <300) {
            this.dx = 0;
        }
    };

    this.moveRight = function() {
        this.dx = 130;
        this.y = 0;

        if (this.x > (parseInt(parent.style.width) - 300)) {
            this.dx = 0;
        }

    };


    this.updatePosition = function() {


        this.x = this.x + this.dx;
        this.element.style.left = this.x + "px";

    }


}

function Bullet() {
    this.y = -10;
    var that = this;

    this.element = document.createElement("div");
    this.element.style.height = "10px";
    this.element.style.width = "6px";
    this.element.style.position = "absolute";
    this.element.style.top = this.y + "px";
    this.element.style.left = "30px";

    this.element.style.backgroundColor = "red";

    this.updatePosition = function() {
        this.element.style.top = that.y + "px";
    }

}


function ShipGame(mainId) {
    var that=this;
    

    this.init = function() {
        var body = document.getElementsByTagName('body')[0];
        body.removeChild(this.button);
        var that = this;
        var main = document.getElementById(mainId);
        main.style.display = 'inline-block';
        main.style.width = '757px';
        main.style.height = '690px';
        var xPosition = '0px';
        var yPosition = 0;
        this.vehicle = new ship(main);
        main.appendChild(this.vehicle.element);
        this.obstacles=[];
        this.bullets = [];
        var carleft=parseInt(this.vehicle.x);
        var carTop=this.vehicle.element;
        var obsTop, obs;
        var obsLeft;
         var counter=0;
  
         that.play=  setInterval(function() {
             if((counter%20)==0){
               if(counter>=180){counter=0}
               obs = new Obstacle('main-wrapper'); 
            }

            counter++;
            that.obstacles.push(obs);

              main.style.backgroundPosition = xPosition + ' ' + yPosition + 'px';
              yPosition = yPosition + 5;


               that.obstacles.forEach(function(obs){
                
                obs.obstacle.style.top = parseInt(obs.obstacle.style.top) + 1+ 'px';
                obsLeft=parseInt(obs.obstacle.style.left);
                obsTop=parseInt(obs.obstacle.style.top);
                 if ( (obs.obstacle.currentPosition==that.vehicle.position)) {
                        
                    if(obsTop+40>520){
                        clearInterval(that.play);
                        main.innerHTML="gameover";
                        main.style.fontSize='50px';
                        main.style.textAlign='center';
                       }

                     }
                
                if (parseInt(obs.obstacle.style.top)+40>parseInt(main.style.height)){
                  obs.remove(); 
                } 
                
            })


        that.bullets.forEach(function(bullet) {
        bullet.y -= 10;
        bullet.updatePosition();
        // console.log(obsTop);
        if (bullet.y <= -550) {
            that.vehicle.element.removeChild(bullet.element);
            that.bullets.splice(that.bullets.indexOf(bullet), 1);
        }
        })
        }, 100);


    }

    this.reset=function(){
        var body = document.getElementsByTagName('body')[0];
        this.button=document.createElement('button');
        this.button.style.width='60px';
        this.button.style.height='40px';
        this.button.style.backgroundColor='#70ad05'
        this.button.style.borderRadius='5px';
        this.button.style.margin='0px';
        this.button.style.float='left';
        this.button.innerHTML='RESET';
        body.appendChild(this.button);
        
        this.button.onclick=function(){
            clearInterval(that.play);
            location.reload();


        }

    }


    this.play=function(){
        var body = document.getElementsByTagName('body')[0];
        this.button=document.createElement('button');
        this.button.style.width='60px';
        this.button.style.height='40px';
        this.button.style.backgroundColor='#70ad05'
        this.button.style.borderRadius='5px';
        this.button.style.margin='0px';
        this.button.style.float='left';
        this.button.id = 'playBtn ';
        this.button.innerHTML='PLAY';
        body.appendChild(this.button);
        
        this.button.onclick=function(){
            that.init();

        }

    }
}


function Obstacle(mainId) {
    var main = document.getElementById(mainId);
    this.obstacle = document.createElement('div');
    this.obstacle.style.width = "40px";
    this.obstacle.style.height = "40px";
    this.obstacle.style.position = "absolute";
    that=this; 
    var random = Math.random();
    if(random<=0.33){
      this.obstacle.style.left ="215px";
      this.obstacle.currentPosition=0;
    }
    if(random>0.33 && random<=0.66){
      this.obstacle.style.left ="345px";
      this.obstacle.currentPosition=1;
    }
    if (random>0.66) {
      this.obstacle.style.left="475px";
      this.obstacle.currentPosition=2;
    }
    this.obstacle.style.top = "0px";
    this.obstacle.style.backgroundImage = 'url("images/stone.png")';
    main.appendChild(this.obstacle);
    this.remove = function(){
      // main.removeChild(this.obstacle);
      this.obstacle.style.display = 'none';
      this.obstacle.currentPosition=3;
      // that.obstacles.splice(that.obstacles.indexOf(obstacle), 1);
    }
    }


var carPositoins=[];
document.onkeydown = function(event) {

    games.forEach(function(game) {

        if (event.keyCode === 37) {
            game.vehicle.moveLeft();
            game.vehicle.updatePosition();
            if(game.vehicle.position==0)
                {game.vehicle.position=0};
            game.vehicle.position--;

        }

        if (event.keyCode === 39) {
            game.vehicle.moveRight();
            game.vehicle.updatePosition();
            if(game.vehicle.position==2)
                {game.vehicle.position=2};
            game.vehicle.position++;
        }
        if (event.keyCode == 32) {
            var bullet = new Bullet();
            game.bullets.push(bullet);
            game.vehicle.element.appendChild(bullet.element);
        }
    });
}
var games = [];
var game1 = new ShipGame("main-wrapper");
// game1.init();
games.push(game1);
game1.reset();
game1.play();


// var game2 = new ShipGame("main-wrapper2");
// games.push(game2);
// game2.reset();
// game2.play();