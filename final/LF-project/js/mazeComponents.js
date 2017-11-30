 class Maze {
     constructor() {
         this.element = document.createElement('div');
         this.element.className = 'screenElem';
         this.clockelement = utils.createElem('div','60px','30px','images/blank.png')
         this.clockelement.style.position = 'absolute';
         this.clockelement.style.top = ' 75px';
         this.clockelement.style.left = '44px';
         this.clockelement.style.color = '#000';
         this.clockelement.style.fontWeight = 'bolder';
         this.clockelement.style.fontSize = '20px';


         this.isStarted = 0;
         this.element.width = 1002;
         this.element.height = 730;
         screen.components.push(this.element);
         this.canvas = document.createElement('canvas');
         this.canvas.width = 866;
         this.canvas.height = 730;
         this.element.appendChild(this.canvas);
         this.clock = utils.createElem('div','136px','730px','images/clock.png')
         this.element.appendChild(this.clock);
         
          this.clock.style.position = 'absolute';
          this.clock.style.left ='866px';
          this.clock.style.top = '0px';

          let instr = utils.createElem('div','100px','400px','images/blank.png');
          instr.style.position = 'absolute';
          instr.style.top = '230px';
          instr.style.left = '20px';
          instr.style.fontSize = '18px';
          instr.style.color = '#c6b083'
          this.clock.appendChild(instr);
          this.clock.appendChild(this.clockelement);
          instr.innerHTML = jData.mazeInstrustion;
         this.map = [
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0  ],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1,0  ],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,1,0 ],
             [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ,1,0 ],
             [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1,0 ],
             [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1,0 ],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,1,0 ],
             [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,1,0 ],
             [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,1,0],
             [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0,1,0 ],
             [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,1,0 ],
             [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1,1,0 ],
             [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,1,0 ],
             [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1 ,1,0],
             [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,1,0 ],
             [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,1,0 ],
             [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,1,0 ],
             [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0,1,0 ],
             [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0,1,0 ],
             [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0,1,0 ],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0,1,0],
             [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,1,0 ],
             [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,1,0 ],
             [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,1,0 ],
             [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,1,0 ],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1,0],
             [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,0 ],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0 ],

         ];

         this.ctx = this.canvas.getContext('2d');
         this.wood = new Image();
         this.path = new Image();
         this.wood.src = 'images/wood.png';
         this.path.src = 'images/blank.png';
         this.path.onload = () => {
             this.ctx.clearRect(0, 0, 864, 730);
             this.ctx.drawImage(this.path, 0, 0, this.path.width, this.path.height);
         }

         this.wood.onload = () => {
             this.ctx.clearRect(0, 0, 864, 730);
             this.ctx.drawImage(this.wood, 0, 0, this.wood.width, this.wood.height);
         }
         this.posX = 0;
         this.posY = 0;
     }

 }

 class GretelTop {
     constructor(ctx) {
         this.gretel = new Image();
         this.gretel.src = 'images/gretel-from-top.png';

         this.x = 0;
         this.y = 0;

         this.gretel.onload = () => {
             ctx.drawImage(this.gretel, this.x, this.y, 26, 26);
         }


     }

     gretelUp() {
         let isCollide = checkCollision(this.x, this.y);
         if (this.y > 0 && isCollide === false) {
             this.dy = -5;
             this.dx = 0;
         } else {
             this.dy = 0;
             this.dx = 0;
         }
     }

     gretelDown() {
         let isCollide = checkCollision(this.x+13, this.y + 26);
         if (this.y < 700 && isCollide === false) {
             this.dy = 5;
             this.dx = 0;
         } else {
             this.dy = 0;
             this.dx = 0;
         }
     }

     gretelRight() {
         let isCollide = checkCollision(this.x + 26, this.y);
         if (this.x < 970 && isCollide === false) {
             this.dx = 5;
             this.dy = 0;
         } else {
             this.dy = 0;
             this.dx = 0;
         }
     }

     gretelLeft() {
         let isCollide = checkCollision(this.x, this.y);
         if (this.x > 0 && isCollide === false) {
             this.dx = -5;
             this.dy = 0;
         } else {
             this.dy = 0;
             this.dx = 0;
         }
     }


     gretelUpdatePos() {

         if (this.x < (190 + 50) && this.y < (210 + 51) && (this.y + 26) > 210 && (this.x + 26) > 190) {
             screen.hat.hat.src = 'images/blank.png';
             screen.hat.state = 1;
         }

         if (this.x <(547+23) && this.y <(675+31) && (this.y + 26) > 675 && (this.x + 26) > 547 && screen.hat.state === 1) {

             timer = 60;
             exitCanvas();

         }
         this.x = this.x + this.dx;
         this.y = this.y + this.dy;
     }
 }

 class WitchHat {
     constructor(ctx) {
         this.hat = new Image();
         this.hat.src = 'images/hat.png';
         this.x = 190;
         this.y = 210;
         this.state = 0;
         this.hat.onload = () => {
             ctx.drawImage(this.hat, this.x, this.y, 50, 51);
         }
     }

 }


 class Arrow {
     constructor(ctx) {
         this.arrow = new Image();
         this.arrow.src = 'images/green.png';
         this.x = 547;
         this.y = 675;
         this.state = 0;
         this.arrow.onload = () => {
             //ctx.drawImage(this.arrow, this.x, this.y, 23, 31);
         }
     }

 }
