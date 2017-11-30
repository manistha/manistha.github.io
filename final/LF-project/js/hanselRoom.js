 class HanselsRoom {
     constructor() {
         this.element = utils.createElem('div', '1002px', S_HEIGHT, 'images/hansels-room.jpg');
         this.element.style.backgroundRepeat = 'no-repeat'
         screen.components.push(this.element);
         this.element.className = 'screenElem';
         this.toForest = utils.createElem('div', '54px', '400px', 'images/blank.png');
         this.element.appendChild(this.toForest);
         this.toForest.style.position = 'absolute';
         this.toForest.style.top = '167px';
         this.toForest.style.left = '945px';
         this.note = utils.createElem('div', '35px', '18px', 'images/note.png');

         this.element.appendChild(this.note);
         this.note.style.position = 'absolute';
         this.note.style.top = '460px';
         this.note.style.left = '300px';
         this.note.state = 0;

          console.log(this.note.state);
         this.note.opened = false;
         this.bread = utils.createElem('div', '38px', '26px', 'images/Sbread.png');
         this.bread.style.position = 'absolute';
         this.bread.style.top = '425px';
         this.bread.style.left = '710px';
         this.element.appendChild(this.bread);
         screen.pickables.push(this.bread);
         this.gretel = utils.createElem('div', '131px', '293px', 'images/gretel.png');
         this.gretel.style.position = 'absolute';
         this.gretel.style.top = '411px';
         this.gretel.style.left = '714px';
         this.element.appendChild(this.gretel);
         this.convo = new ConvoBox();
         this.element.appendChild(this.convo.element);
         this.bread.onclick = () => {
             

         }

         this.note.onclick = () => {
             console.log('much',this.note.state);
             if (this.note.state === 0 ||this.note.state === 2) {
               console.log('before',this.note.state);
                this.note.state = 1;
                 console.log('after',this.note.state);
                 
                 this.note.style.background = 'url("images/hans-note.png")';
                 this.note.style.width = "283px";
                 this.note.style.height = '176px';
                 this.note.style.top = '300px';
                 this.note.style.left = '300px';
                 //debugger;
                 // this.note.state = 1;
                 
             } else if (this.note.state === 1) {
                 this.note.style.background = 'url("images/note.png")';
                 this.note.style.width = "35px";
                 this.note.style.height = '18px';
                 this.note.style.top = '460px';
                 this.note.style.left = '290px';
                // debugger;
                 this.note.state = 2;
             }

             if (this.note.state === 2 ) {
                 this.showconvo(jData.hansroom.speech2,2000);
             }

         }
         this.note.onmouseover = () => {
             this.note.style.cursor = 'pointer';
         }


     }



     showconvo(data,time) {
         this.speech = utils.createConvo(data,'images/gretel-head.png');
         this.convo.element.appendChild(this.speech);
         setTimeout(() => this.convo.element.removeChild(this.speech), time);
     }
 }