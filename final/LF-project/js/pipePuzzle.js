class PipePuzzle {
     constructor() {
     		 this.isStarted = 0;
         this.element = utils.createElem('div', S_WIDTH, S_HEIGHT, 'images/sewers-bg.png');
         this.element.className = 'screenElem';
        
         screen.components.push(this.element);
         this.pipeBigContainer = utils.createElem('div', '790px', '637px', 'images/pipesPuzzlebg.png');
         this.pipeBigContainer.style.position = 'relative';
         this.pipeBigContainer.style.top = '64px';
         this.pipeBigContainer.style.left ='32px';
         this.element.appendChild(this.pipeBigContainer);

         this.pipeContainer = utils.createElem('div', '720px', '540px', 'images/pipeBg.png');
         this.pipeContainer.style.marginTop = '0px';

         this.pipeContainer.style.position = 'relative';
         this.pipeContainer.style.top = '49px';
         this.pipeContainer.style.left = '40px';
         this.pipeBigContainer.appendChild(this.pipeContainer);

         this.timerDiv = utils.createElem('div', '60px', '22px', 'images/blank.png');
         this.timerDiv.style.position ='absolute';
         this.timerDiv.style.top = '75px';
         this.timerDiv.style.left ='895px';
         this.timerDiv.style.color = '#000';
         this.timerDiv.style.fontWeight = 'bold';
         this.element.appendChild(this.timerDiv);
         this.valve = utils.createElem('div', '40px', '40px', 'images/blank.png');
         this.valve.style.position = 'absolute';
         this.valve.style.top = '-46px';
         this.valve.style.left = '200px';
         this.pipeContainer.appendChild(this.valve);

         this.nextPage = utils.createElem('div','60px','60px','images/blank.png');
         this.nextPage.style.position = 'absolute';
         this.nextPage.style.top = '0px';
         this.nextPage.style.left = '0px';
         this.element.appendChild(this.nextPage);
         this.map = [
             [0, 1, 0, 0, 0, 1, 1, 0],
             [0, 1, 1, 1, 1, 1, 0, 1],
             [1, 0, 1, 1, 1, 1, 0, 0],
             [0, 0, 1, 1, 1, 0, 0, 0],
             [0, 1, 1, 0, 1, 0, 0, 1],
             [1, 0, 0, 1, 0, 1, 0, 0]
         ]
     }

 }

 makePipeMap = (bent, straight) => {
     let tileSize = 90;
     let x = 0;
     let y = 0;
     for (let c = 0; c < screen.pipePuzzle.map.length; c++) {
         for (let r = 0; r < screen.pipePuzzle.map[c].length; r++) {
             let tile = screen.pipePuzzle.map[c][r]
             let rand1 = utils.getRandom(0,3)
              let rand2 = utils.getRandom(0,1)
             let angles = ['rotate(0deg)','rotate(90deg)','rotate(180deg)','rotate(270deg)']
             if (tile == 0) {
                 screen.pipePuzzle.bentPipe = utils.createElem('div', '90px', '90px', bent);
                 screen.pipePuzzle.bentPipe.style.position = 'absolute';
                 screen.pipePuzzle.bentPipe.style.transform = angles[rand1];
                 screen.pipePuzzle.pipeContainer.appendChild(screen.pipePuzzle.bentPipe)
                 screen.pipePuzzle.bentPipe.style.left = r * tileSize + 'px';
                 screen.pipePuzzle.bentPipe.style.top = c * tileSize + 'px';
                 screen.pipePuzzle.bentPipe.type = 0;
                 screen.pipes.push(screen.pipePuzzle.bentPipe);
             } else if (tile == 1) {
                 screen.pipePuzzle.straightPipe = utils.createElem('div', '90px', '90px', straight)
                 screen.pipePuzzle.straightPipe.style.position = 'absolute';
                 screen.pipePuzzle.straightPipe.style.transform = angles[rand2] ;
                 screen.pipePuzzle.pipeContainer.appendChild(screen.pipePuzzle.straightPipe)
                 screen.pipePuzzle.straightPipe.style.left = r * tileSize + 'px';
                 screen.pipePuzzle.straightPipe.style.top = c * tileSize + 'px';
                 screen.pipePuzzle.straightPipe.type = 1;
                 screen.pipes.push(screen.pipePuzzle.straightPipe);
             }

         }
     }

 }

 getRotationValues = () => {

     for (let i = 0; i < solnMems.length; i++) {

         let value = solnMems[i];
         checkMatrix[i] = screen.pipes[value].style.transform;
     }

 }


 fillPipes = () => {
     for (let i = 0; i < solnMems.length; i++) {
         let value = solnMems[i];
         if (screen.pipes[value].type ===0) {
             screen.pipes[value].style.background ="url( 'images/bent-pipe-blue.png')";
         } else {
             screen.pipes[value].style.background = "url('images/straight-pipe-blue.png')";
         }
     }
 }