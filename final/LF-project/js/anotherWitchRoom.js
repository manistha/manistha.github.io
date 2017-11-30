class someWitchRoom {
     constructor(image) {
         this.element = utils.createElem('div', '1002px', S_HEIGHT, image);
         this.state = 0;
         screen.components.push(this.element);
         this.element.style.color = '#fff';
         this.toWRoom = utils.createElem('div', '150px', '45px', 'images/this-way-right.png');
         this.element.className = 'screenElem';
         this.toWRoom.style.position = 'absolute';
         this.toWRoom.style.top = '286px';
         this.toWRoom.style.left = '466px';
         
     }
 }