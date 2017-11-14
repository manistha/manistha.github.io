let main=document.getElementById('main');
let nInterval=undefined;
let heights=["60px","100px","130px"];
let birdPosition= [];
class Game{
	constructor(){
		this.element = document.getElementById('parent');
		this.nInterval = undefined;
		this.element.style.width = '625px';
		this.element.style.height = '470px';
		this.element.style.background = 'url("images/background.jpg")';
		this.element.style.position = 'relative';
	}

	init() {
		let counter=0;
		this.element.style.background = 'url("images/background.jpg")';
		this.element.style.position = 'relative';
		main.appendChild(this.element);
		this.bird = new Flappy;
		let obstacleArr=[];
		let obstacleDownArr = [];
		nInterval = setInterval(() =>{
			this.bird.moveDown();
			if ( parseInt(this.bird.element.style.top) <= 10 || parseInt(this.bird.element.style.top) >= 415){
				this.endgame(); 
			}
		  let obstacleArr = [];
		  let obstacleDownArr = [];

			if((counter%10)==0){
				if(counter>=180){counter==0}
				this.obstacle= new Obstacle(Math.floor(Math.random()*3),0);
 		    this.element.appendChild(this.obstacle.obstacle);
 		    this.obsDown = new ObstacleDown(Math.floor(Math.random()*3),300);
 		    this.element.appendChild(this.obsDown.obstacle);
			}
      counter++;
			obstacleArr.push(this.obstacle);
			obstacleDownArr.push(this.obsDown);
      
      obstacleArr.forEach((obstacle) =>{
      	this.obstacle.moveObstacle();

      	this.collisionCheck1();

      	if(this.obstacle.x<30){
				this.element.removeChild(this.obstacle.obstacle);
				obstacleArr.splice(obstacleArr.indexOf(this.obstacle),1);
      		
      	}
      })

      obstacleDownArr.forEach((obstacle) =>{
      	this.obsDown.moveObstacle();
      	
      	this.collisionCheck2()
      	
      	if(this.obsDown.x<30){
				this.element.removeChild(this.obsDown.obstacle);
				obstacleArr.splice(obstacleArr.indexOf(this.obsDown),1);
      		
      	}
      })
		},300)

	
	}

	collisionCheck1() {
		let birdY = parseInt(this.bird.element.style.top);
		let birdX = parseInt(this.bird.element.style.left);
		let obsX = this.obstacle.x;
		let obsY = this.obstacle.y;
		let obstacleHeight =parseInt(this.obstacle.obstacle.style.height);
		if(birdY<(obsY+obstacleHeight+10) && (birdX+30)> obsX){
			this.endgame();
		}
	}

	collisionCheck2() {
		let birdY = parseInt(this.bird.element.style.top);
		let birdX = parseInt(this.bird.element.style.left);
		let obsX = this.obsDown.x;
		let obsY = this.obsDown.y;
		let obstacleHeight =parseInt(this.obsDown.obstacle.style.height);
		if(birdY>(obsY+60) && (birdX+30)> obsX){
			this.endgame();
		}
	}

	endgame(){
		this.element.style.background='black';
		clearInterval(nInterval);
		this.element.style.fontSize ='40px';
		this.element.style.color='white';
		this.element.style.textAlign ='center';
		this.element.innerHTML='Game Over';

	}
}

class Flappy{
	constructor(){
		parent = document.getElementById('parent');
		this.element =document.createElement('div');
		this.element.style.width = '88px';
		this.element.style.height = '60px';
		this.element.style.top = parseInt(parent.style.height)/2 + 'px';
		this.element.style.left = parseInt(parent.style.width)/5 + 'px';
		this.element.style.background = 'url("images/flappy.png")';
		this.element.style.position = 'absolute';
		this.x = parseInt(this.element.style.left);
    this.y = parseInt(this.element.style.top);
    this.dy=10;
		parent.appendChild(this.element);
	}
	moveUp(){
		this.dy=-40;
		this.y = this.y + this.dy;
	  this.element.style.top = this.y + "px";
	}
  
	moveDown(){
		this.dy=10;
	  this.y = this.y + this.dy;
	  this.element.style.top = this.y + "px";
	  this.dy=10;
	}
	 
}
 

 class Obstacle{
 	constructor(heightIndex,topValue){
 		this.x = 670;
 		this.y = 0;
 		this.obstacle = document.createElement('div');
 		this.obstacle.style.background = 'url("images/obstacleTop.png")';
 		this.obstacle.style.width = '35px';
 		this.obstacle.style.height = heights[heightIndex];
 		this.obstacle.style.position = 'absolute';
 		this.obstacle.style.top = this.y + 'px';
 		this.obstacle.style.left = topValue + 'px';
 		this.obstacle.style.position = 'absolute';
 	}
 	moveObstacle(){
 		this.dx = -80;
		this.x = this.x + this.dx;
	  this.obstacle.style.left = this.x + "px";
 	}

 }


 class ObstacleDown extends Obstacle{
 	constructor(heightIndex,topValue){

 		super(heightIndex,topValue);
 		this.y =120;
 		this.obstacle.style.top = 'unset';
 		this.obstacle.style.bottom = this.y + 'px';
 		
 	}
 }




let games = [];
let game1 =new Game();
games.push(game1);
game1.init();

document.onkeydown = function(event) {
	games.forEach((game) => {
    if (event.keyCode === 32) {
        game.bird.moveUp();
    }
   })
 }  