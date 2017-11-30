class StartScreen {
     constructor() {
         this.element = utils.createElem('div', S_WIDTH, S_HEIGHT, 'images/home-page.png');
         this.element.style.position = 'relative';
         this.element.className = 'screenElem';
         screen.components.push(this.element);
         this.playbtn = utils.createElem('div', '80px', '40px', 'images/blank.png');
         this.element.appendChild(this.playbtn);
         this.playbtn.style.position = 'absolute';
         this.playbtn.style.top = '140px';
         this.playbtn.style.left = '800px';

         this.guidebtn = utils.createElem('div', '80px', '40px', 'images/blank.png');
         this.element.appendChild(this.guidebtn);
         this.guidebtn.style.position = 'absolute';
         this.guidebtn.style.top = '320px';
         this.guidebtn.style.left = '800px';
         
     }
 }