 class WitchRoom {
     constructor() {
         this.element = utils.createElem('div', '1002px', S_HEIGHT, 'images/witchroom.png');
         screen.components.push(this.element);
         this.element.style.position ='relative'
         this.element.className = 'screenElem';
         this.state = 0;
         this.toMaze = utils.createElem('div', '150px', '45px', 'images/this-way.png');
         this.toMaze.style.position = 'absolute';
         this.toMaze.style.top = '450px';
         this.toMaze.style.left = '605px';
         this.gretel = utils.createElem('div', '82px', '182px', 'images/Mgretel.png');
         this.gretel.style.position = 'absolute';
         this.gretel.style.top = '443px';
         this.gretel.style.left = '390px';
         this.element.appendChild(this.gretel);
         

     }
 }