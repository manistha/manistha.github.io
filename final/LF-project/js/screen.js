let jData = {
    "hansroom": {
        "speech1": "Hansel!Where are you?",
        "speech2": "He better not go near the witch's house..I must go find Hansel..",
        "speech3": "I must go find Hansel.."
    },
    "forest": {
        "speech1": "Breadcrumbs!Hansel left me a trail, he must be in trouble. ",
        "speech2": "I have to get inside this house"
    },
    "witchroom": {
        "speech1": "Where is my brother witch!",
        "speech2": "He's my dinner for tonight..hahaa",
        "speech3": "But..I'll keep your brother alive,as long as you serve me little girl",
        "speech4": "What do you want me to do?",
        "speech5": "Hmm..first,go bring me my hat trapped in the MAZE, now go! You're running out of time"
    },
    "mazeInstrustion": "Go through the maze to get the witch's hat and the get to the end of the maze to present it to the witch",
    "room": {
        "speech1": "Ok witch I brought you your hat now bring me my brother!",
        "speech2": "Haha you're not done with the service girl",
        "speech3": "What do i have to do next?",
        "speech4": "There is an old swamp outside, you need to bring all my stuff from the swanp to me, now hurry"
    },

    "room1": {
        "speech1": "Ok witch I brought you your stuff now bring me my brother!",
        "speech2": "Not so soon, girl",
        "speech3": "What do i have to do now?",
        "speech4": "The pipes of my mansion are drained, fix them for me. Hurry up!"
    },
    "room2": {
        "speech1": "I fixed the pipes, now bring me my brother!",
        "speech2": "You can have him",
        "speech3": "Really?",
        "speech4": "Yes, solve the blocks to get to your brother"
    },
    "blockPuzzleIntr": "Move the blocks in different directions as shown in order to move the red block towards the pink light ",
    "room3": {
        "speech1": "Gretel! you found me!",
        "speech2": "Ofcourse I did you idiot",
        "speech3": "now let's get outta here before the witch finds us again.."
    },
    "guide":"Point and click at objects for hints to play.Look for the doors to get in"
}


let angle1 = 'rotate(0deg)';
let angle2 = 'rotate(90deg)';
let angle3 = 'rotate(180deg)';
let angle4 = 'rotate(270deg)';
let compCounter = 0;
const utils = {
    getRandom: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    createElem: (tag, width, height, bg) => {
        element = document.createElement(tag);
        element.style.width = width;
        element.style.height = height;
        element.style.background = 'url(' + bg + ')';
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.color = '#fff';

        return element;
    },
    createConvo: (data, headImg) => {
        element = document.createElement('div');
        element.className = 'convoBox'
        element.style.position = 'relative';
        element.style.background = '#000';
        element.style.top = '650px';
        head = document.createElement('div');
        head.style.width = '55px';
        head.style.height = '60px';
        head.style.top = '0px';
        head.style.left = '40px';
        head.style.position = 'absolute';
        head.style.background = 'url(' + headImg + ')'
        element.appendChild(head);
        speech = document.createElement('div');
        speech.style.width = 'auto';
        speech.style.fontSize = '30px';
        speech.style.color = '#fff';
        speech.innerHTML = data;
        speech.style.position = 'absolute';
        speech.style.top = '10px';
        speech.style.left = '110px';
        element.appendChild(speech)
        return element;
    },

    setTopLeft: (element, top, left) => {
        element.style.position = 'absolute';
        element.style.top = top;

        element.style.left = left;
        return element;
    }
}

const S_HEIGHT = '730px';
const S_WIDTH = '1002px';



class Screen {
    constructor(screenId) {
        this.element = document.getElementById(screenId);
        this.components = [];
        this.pickables = [];
        this.pipes = [];
        this.blocks = [];
        this.state = 'start';
        this.nextBtn = utils.createElem('div', '60px', '30px', 'images/blank.png');
        this.nextBtn.innerHTML = 'NEXT';
        this.nextBtn.style.fontSize = '24px';
        this.nextBtn.style.color = '#af9672';
        this.nextBtn.style.cursor = 'pointer';

        this.playAgainButton = utils.createElem('div', '160px', '60px', 'images/blank.png');
        this.playAgainButton.innerHTML = 'PLAY AGAIN';
        this.playAgainButton.style.fontSize = '22px';
        this.playAgainButton.style.color = '#af9672';
        this.playAgainButton.style.cursor = 'pointer';
    }

    init() {
        this.startScreen = new StartScreen();
        this.gretelIntro = new GretelIntro();
        this.hansroom = new HanselsRoom();
        this.hansroom.note.state = 0;
        this.forest = new Forest();
        this.witchRoom = new WitchRoom();
        this.maze = new Maze();
        this.gretel = new GretelTop(this.maze.ctx);
        this.hat = new WitchHat(this.maze.ctx);
        this.arrow = new Arrow();
        this.room = new someWitchRoom('images/room.png');
        this.swamp = new Swamp();
        this.swampComps = new SwampComps();
        this.room1 = new someWitchRoom('images/room.png');
        this.pipePuzzle = new PipePuzzle();
        this.room2 = new someWitchRoom('images/room.png');
        this.blockPuzzle = new BlockPuzzle();
        this.room3 = new LastRoom();

        this.element.appendChild(this.components[0]);
        this.startScreen.playbtn.addEventListener('click', () => {
            this.element.removeChild(this.components[0]);
            this.element.appendChild(this.components[1]);
            setTimeout(() => {
                this.element.removeChild(this.components[1])
                this.element.appendChild(this.components[2]);
                this.hansroom.showconvo(jData.hansroom.speech1,2000);
            }, 4000);
        })

        this.hansroom.toForest.addEventListener('click', () => {
        	  console.log(this.hansroom.note.state)
            if (this.hansroom.note.state === 2) {
            	 console.log(this.hansroom.note.state)
                this.element.removeChild(this.components[2]);
                this.element.appendChild(this.components[3]);
                this.hansroom.note.state=0;
            } else {
                let speech = utils.createConvo('Why should i go out without finding out where Hansel is!','images/gretel-head.png')
                this.hansroom.convo.element.appendChild(speech);

                setTimeout(() => this.hansroom.convo.element.removeChild(speech), 3000);
            }
        })

        this.forest.toWRoom.addEventListener('click', () => {
            if (this.forest.breadcrumb.state == 1) {
                this.element.removeChild(this.components[3]);
                this.element.appendChild(this.components[4]);
                let convo = utils.createConvo(jData.witchroom.speech1,'images/gretel-head.png')
         				this.components[4].appendChild(convo);
         				//this.components[4].removeChild(convo);
         				setTimeout(()=>{
         					this.components[4].removeChild(convo);
         					convo = utils.createConvo(jData.witchroom.speech2,'images/witch-head.png')
         					this.components[4].appendChild(convo);
         				},2000)

         				setTimeout(()=>{
         					this.components[4].removeChild(convo);
         					convo = utils.createConvo(jData.witchroom.speech3,'images/witch-head.png')
         					this.components[4].appendChild(convo);
         				},4000)

         				setTimeout(()=>{
         					this.components[4].removeChild(convo);
         					convo = utils.createConvo(jData.witchroom.speech4,'images/gretel-head.png')
         					this.components[4].appendChild(convo);
         				},6000)

         				setTimeout(()=>{
         					this.components[4].removeChild(convo);
         					convo = utils.createConvo(jData.witchroom.speech5,'images/witch-head.png')
         					this.components[4].appendChild(convo);
         					this.components[4].appendChild(this.witchRoom.toMaze);
         				},8000)

            } else {
                  this.forest.showconvo('Why should i go in?',1000);

            }
        })

        this.witchRoom.toMaze.addEventListener('click', () => {
            this.element.removeChild(this.components[4]);
            this.element.appendChild(this.components[5]);
            this.maze.isStarted = 1;
        })
        this.room.toWRoom.addEventListener('click', () => {
            this.element.removeChild(this.room.element);
            this.element.appendChild(this.components[7]);
            this.swamp.isStarted = 1;
        })

        this.swamp.nextPage.onclick = () => {
            this.element.removeChild(this.swamp.element);
            this.element.appendChild(this.components[8]);
        }

        this.room1.toWRoom.addEventListener('click', () => {
            this.element.removeChild(this.room1.element);
            this.element.appendChild(this.components[9]);
            this.pipePuzzle.isStarted = 1;
        })

        this.pipePuzzle.nextPage.onclick = () => {
            this.element.removeChild(this.pipePuzzle.element);
            this.pipePuzzle.isStarted = 0;
            this.element.appendChild(this.components[10]);
        }

        
        this.room2.toWRoom.onclick = () => {
            this.element.removeChild(this.room2.element);
            this.blockPuzzle.isStarted = 1;
            console.log(this.components[11]);
            this.element.appendChild(this.components[11]);
        }


        this.swamp.comps.forEach((comp) => {
            comp.Div.style.fontSize = '18px';
            comp.Div.style.paddingTop = '25px';
            comp.Div.style.color = '#9e9387';
            this.swamp.labelandTime.labels.appendChild(comp.Div);


            comp.onclick = () => {

                compCounter++;
                console.log(compCounter)
                comp.Div.style.textDecoration = 'line-through';
                screen.swamp.element.removeChild(comp);

                if (compCounter >= 8) {
                    setTimeout(() => {
                        timer = 60;
                        this.swamp.isStarted = 0;
                        showPopup(this.components[7], this.components[8]);
                        console.log(this.room.state);



                    }, 500)

                }
            }
        })



        for (let i = 0; i < 8; i++) {
            this.swamp.element.appendChild(this.swamp.comps[i]);
        }
        
            document.onkeydown = (event) => {
                if (event.keyCode == 37) {
                    this.gretel.gretelLeft()
                }

                if (event.keyCode == 38) {
                    this.gretel.gretelUp()
                }

                if (event.keyCode == 39) {
                    this.gretel.gretelRight()
                }

                if (event.keyCode == 40) {
                    this.gretel.gretelDown()
                }
                this.gretel.gretelUpdatePos(this.maze.ctx);
            }
        

        


    }
}


let screen = new Screen('myScreen');
screen.init();

let mousePosition;
let offset = [0, 0];
let timer = 60;
let counterForTimer = 0;
let collideSide;


reinit = () => {
    console.log(screen.components);
    screen.components = [];
    screen.pipes = [];
    screen.blocks = [];
    timer = 60;
    console.log(screen.components);
    screen.init();
}
startTimer = (clock, state) => {

    let minutes, seconds;
    minutes = Math.floor(timer / 60)
    seconds = Math.floor(timer % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.textContent = minutes + ":" + seconds;

    if (timer-- < 0) {
        timer = 0
        state.isStarted = 0;
        clock.textContent = 'Time Up';
        clock.style.left = parseInt(clock.style.left) - 10 + 'px';
        showGameover(state.element)
    }
}

checkCollision = (xPosition, yPosition) => {

    let x = Math.floor((xPosition) / 26);
    let y = Math.floor((yPosition) / 26);
    let mapIndexValue = screen.maze.map[y][x];

    if (mapIndexValue === 1) {
        return true;
    } else {
        return false;
    }

}
exitCanvas = () => {
    if (screen.arrow.state === 0) {
        screen.element.removeChild(screen.components[5]);
        screen.arrow.state = 1;
    }

    tiemr = 60;
    screen.maze.isStarted = 0;
    screen.element.appendChild(screen.components[6]);
    let convo = utils.createConvo(jData.room.speech1, 'images/gretel-head.png')
    screen.components[6].appendChild(convo);
    setTimeout(() => {
        screen.components[6].removeChild(convo);
        convo = utils.createConvo(jData.room.speech2, 'images/witch-head.png')
        screen.components[6].appendChild(convo);
    }, 2000)

    setTimeout(() => {
        screen.components[6].removeChild(convo);
        convo = utils.createConvo(jData.room.speech3, 'images/gretel-head.png')
        screen.components[6].appendChild(convo);
    }, 6000)

    setTimeout(() => {
        screen.components[6].removeChild(convo);
        convo = utils.createConvo(jData.room.speech4, 'images/witch-head.png')
        screen.components[6].appendChild(convo);
        screen.components[6].appendChild(screen.room.toWRoom);
    }, 8000)
}

showRoom1Convo = () => {
    let convo = utils.createConvo(jData.room1.speech1, 'images/gretel-head.png')
    screen.components[8].appendChild(convo);
    setTimeout(() => {
        screen.components[8].removeChild(convo);
        convo = utils.createConvo(jData.room1.speech2, 'images/witch-head.png')
        screen.components[8].appendChild(convo);
    }, 2000)

    setTimeout(() => {
        screen.components[8].removeChild(convo);
        convo = utils.createConvo(jData.room1.speech3, 'images/gretel-head.png')
        screen.components[8].appendChild(convo);
    }, 4000)

    setTimeout(() => {
        screen.components[8].removeChild(convo);
        convo = utils.createConvo(jData.room1.speech4, 'images/witch-head.png')
        screen.components[8].appendChild(convo);
        screen.components[8].appendChild(screen.room1.toWRoom);
    }, 6000)
}

showRoom2Convo = () => {
    let convo = utils.createConvo(jData.room2.speech1, 'images/gretel-head.png')
    screen.components[10].appendChild(convo);
    setTimeout(() => {
        screen.components[10].removeChild(convo);
        convo = utils.createConvo(jData.room2.speech2, 'images/witch-head.png')
        screen.components[10].appendChild(convo);
    }, 2000)

    setTimeout(() => {
        screen.components[10].removeChild(convo);
        convo = utils.createConvo(jData.room2.speech3, 'images/gretel-head.png')
        screen.components[10].appendChild(convo);
    }, 4000)

    setTimeout(() => {
        screen.components[10].removeChild(convo);
        convo = utils.createConvo(jData.room2.speech4, 'images/witch-head.png')
        screen.components[10].appendChild(convo);
        screen.components[10].appendChild(screen.room2.toWRoom);
    }, 6000)
}

showRoom3Convo = () => {
    let convo = utils.createConvo(jData.room3.speech1, 'images/hansel-head.png')
    screen.components[12].appendChild(convo);
    setTimeout(() => {
        screen.components[12].removeChild(convo);
        convo = utils.createConvo(jData.room3.speech2, 'images/gretel-head.png')
        screen.components[12].appendChild(convo);
    }, 2000)

    setTimeout(() => {
        screen.components[12].removeChild(convo);
        convo = utils.createConvo(jData.room3.speech3, 'images/gretel-head.png')
        screen.components[12].appendChild(convo);
    }, 4000)

    setTimeout(() => {
        screen.components[12].removeChild(convo);
    }, 6000)


}

showGameCompletion = (element1) => {
    let popup = utils.createElem('div', '300px', '180px', 'images/popup.png');
    popup.style.position = 'absolute';
    popup.style.top = '300px';
    popup.style.left = '300px';

    popup.appendChild(screen.playAgainButton);

    overDiv = utils.createElem('div', '280px', '30px', 'images/blank.png');
    overDiv.innerHTML = "Congratulations! You've completed the game."
    overDiv.style.position = 'relative';
    overDiv.style.top = '20px';
    overDiv.style.left = '25px';
    overDiv.style.fontSize = '20px';
    overDiv.style.color = '#af9672'
    popup.appendChild(overDiv);
    screen.playAgainButton.style.position = 'absolute';
    screen.playAgainButton.style.top = '140px';
    screen.playAgainButton.style.left = '150px';

    element1.appendChild(popup);

    screen.playAgainButton.onclick = () => {
        screen.element.removeChild(element1);
        reinit();
    }
}

showGuide = (element1) => {
    let popup = utils.createElem('div', '300px', '180px', 'images/popup.png');
    popup.style.position = 'absolute';
    popup.style.top = '300px';
    popup.style.left = '300px';

    popup.appendChild(screen.playAgainButton);

    overDiv = utils.createElem('div', '280px', '30px', 'images/blank.png');
    overDiv.innerHTML = "Congratulations! You've completed the game."
    overDiv.style.position = 'relative';
    overDiv.style.top = '20px';
    overDiv.style.left = '25px';
    overDiv.style.fontSize = '20px';
    overDiv.style.color = '#af9672'
    popup.appendChild(overDiv);
    screen.playAgainButton.style.position = 'absolute';
    screen.playAgainButton.style.top = '140px';
    screen.playAgainButton.style.left = '150px';

    element1.appendChild(popup);
    }

showGameover = (element1) => {
    let popup = utils.createElem('div', '300px', '180px', 'images/popup.png');
    popup.style.position = 'absolute';
    popup.style.top = '300px';
    popup.style.left = '300px';

    popup.appendChild(screen.playAgainButton);

    overDiv = utils.createElem('div', '280px', '30px', 'images/blank.png');
    overDiv.innerHTML = "Sorry, you're out of time!"
    overDiv.style.position = 'relative';
    overDiv.style.top = '20px';
    overDiv.style.left = '25px';
    overDiv.style.fontSize = '20px';
    overDiv.style.color = '#af9672'

    over = utils.createElem('div', '280px', '60px', 'images/blank.png');
    over.innerHTML = "GAMEOVER";
    over.style.fontSize = '40px';
    over.style.textAlign = 'center';
    over.style.marginTop = '15px';
    over.style.color = '#af9672'
    popup.appendChild(over);
    popup.appendChild(overDiv);
    screen.playAgainButton.style.position = 'absolute';
    screen.playAgainButton.style.top = '140px';
    screen.playAgainButton.style.left = '150px';

    element1.appendChild(popup);

    screen.playAgainButton.onclick = () => {
        screen.element.removeChild(element1);
        reinit();
    }
}

showPopup = (element1, element2) => {
    let popup = utils.createElem('div', '300px', '180px', 'images/popup.png');
    popup.style.position = 'relative';
    popup.style.top = '300px';
    popup.style.left = '300px';

    popup.appendChild(screen.nextBtn);

    congratsDiv = utils.createElem('div', '280px', '60px', 'images/blank.png');
    congratsDiv.innerHTML = "Congratulations! you completed the task."
    congratsDiv.style.position = 'relative';
    congratsDiv.style.top = '20px';
    congratsDiv.style.left = '20px';
    congratsDiv.style.fontSize = '20px';
    congratsDiv.style.color = '#af9672'

    popup.appendChild(congratsDiv);
    screen.nextBtn.style.position = 'absolute';
    screen.nextBtn.style.top = '140px';
    screen.nextBtn.style.left = '220px';
    element1.appendChild(popup);
    screen.nextBtn.onclick = () => {
        console.log(element1)
        console.log(element2)
        screen.element.removeChild(element1);
        screen.room.state = 1;
        screen.element.appendChild(element2);
        setTimeout(() => {
            showRoom1Convo();
        }, 1000);
    }
}




showPopupForPipe = (element1, element2) => {
    console.log(element1)
    let popup = utils.createElem('div', '300px', '180px', 'images/popup.png');
    popup.style.position = 'absolute';
    popup.style.top = '300px';
    popup.style.left = '300px';

    popup.appendChild(screen.nextBtn);

    congratsDiv = utils.createElem('div', '280px', '60px', 'images/blank.png');
    congratsDiv.innerHTML = "Congratulations! you completed the task."
    congratsDiv.style.position = 'relative';
    congratsDiv.style.top = '20px';
    congratsDiv.style.left = '20px';
    congratsDiv.style.fontSize = '20px';
    congratsDiv.style.color = '#af9672'

    popup.appendChild(congratsDiv);
    screen.nextBtn.style.position = 'absolute';
    screen.nextBtn.style.top = '140px';
    screen.nextBtn.style.left = '220px';
    element1.appendChild(popup);
    screen.nextBtn.onclick = () => {
        console.log(element1)
        console.log(element2)
        screen.element.removeChild(element1);
        screen.room.state = 1;
        screen.element.appendChild(element2);
        setTimeout(() => {
            showRoom2Convo();
        }, 1000);
    }
}

drawMap = () => {
    let tileSize = 26;
    for (let c = 0; c < screen.maze.map.length; c++) {
        for (let r = 0; r < screen.maze.map[c].length; r++) {
            let tile = screen.maze.map[c][r]

            if (tile == 1) {
                screen.maze.ctx.drawImage(screen.maze.wood, r * tileSize, c * tileSize, tileSize, tileSize);
            } else {
                screen.maze.ctx.drawImage(screen.maze.path, r * tileSize, c * tileSize, tileSize, tileSize);
            }

        }
    }
}


makePipeMap('images/bent-pipe.png', 'images/straight-pipe.png');
screen.pipes.forEach((pipe) => {
    let angle1 = 90;
    let angle2 = 90
    pipe.onclick = () => {
        if (pipe.type === 0) {
            pipe.style.transform = 'rotate(' + angle1 + 'deg)';
            angle1 += 90;
            if (angle1 >= 360) {
                angle1 = 0;
            }
        } else if (pipe.type === 1) {
            pipe.style.transform = 'rotate(' + angle2 + 'deg)';
            angle2 += 90;
            if (angle2 >= 180) {
                angle2 = 0;
            }
        }
        getRotationValues();

    }
})


let checkMatrix = [];
let matchCount = 0;
let solnMems = [0, 1, 2, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 35, 36, 37, 43]
let solutionMatrix = [angle4, angle2, angle2, angle3, angle2, angle2, angle2, angle2, angle2, angle1, angle4, angle2, angle2, angle2, angle2, angle2, angle3, angle2, angle2, angle2, angle1, angle4, angle2, angle2, angle1];



screen.pipePuzzle.valve.onclick = () => {
    for (let i = 0; i < solutionMatrix.length; i++) {
        if (solutionMatrix[i] == checkMatrix[i]) {
            matchCount++;
        }

    }
    if (matchCount === 25) {
        fillPipes();
        setTimeout(() => {
            timer = 60;
            screen.pipePuzzle.isStarted = 0;
            showPopupForPipe(screen.components[9], screen.components[10]);
        })
    }
}


blockCollisionCheck = (rectA, i) => {
    for (let j = 0; j < screen.blocks.length; j++) {
        let rectB = screen.blocks[j];
        let x1 = parseInt(rectA.style.left);
        let y1 = parseInt(rectA.style.top);
        let x2 = parseInt(rectB.style.left);
        let y2 = parseInt(rectB.style.top);
        let w1 = parseInt(rectA.style.width);
        let h1 = parseInt(rectA.style.height);
        let w2 = parseInt(rectB.style.width);
        let h2 = parseInt(rectB.style.height);


        if (j != i) {

            if (x1 < 0 || (x1 + w1) > 646 || y1 < 0 || (y1 + h1) > 648) {
                if (x1 < 0) collideSide = 'left';

                if (y1 < 0) collideSide = 'top';

                if (x1 + w1 >= 646) collideSide = 'right';

                if (y1 + h1 >= 648) collideSide = 'bottom';

                return true;

            }
            if (x1 < (x2 + w2) && (x1 + w1) > x2 && y1 < (y2 + h2) && (y1 + h1) > y2) {
                if (x1 + w1 - 2 == x2 || x1 + w1 - 1 == x2||x1 + w1 - 3 == x2) collideSide = 'right';


                if (x1 + 2 == x2 + w2 || x1 + 2 == x2 + w2||x1 + 3 == x2 + w2) collideSide = 'left';

                console.log(collideSide);

                if (y1 + 2 == y2 + h2 || y1 + 1 == y2 + h2||y1 + 3 == y2 + h2) collideSide = 'top';

                if (y1 + h1 - 2 == y2 || y1 + h1 - 1 == y2||y1 + h1 - 3 == y2) collideSide = 'bottom';
                console.log(collideSide)

                return true;
            }


        }
    }

}

drag = (block, i) => {
    if (block.isDown === true) {
        
     block.style.border = 'solid 0px red';
    
            document.onkeydown = (event) => {
                if (event.keyCode == 37) {
                    blockLeft();
                }

                if (event.keyCode == 38) {
                    blockUp();
                }

                if (event.keyCode == 39) {
                    blockRight();
                }

                if (event.keyCode == 40) {
                    blockDown();
                }
                if(screen.blockPuzzle.isStarted===1){
                    blockUpdatePosition();
                }
                
                if(block.type=='R'&&(parseInt(block.style.left)+214)>=646){
                screen.blockPuzzle.isStarted =0
                screen.element.removeChild(screen.components[11]);
                screen.element.appendChild(screen.components[12]);
                showRoom3Convo();
                setTimeout(()=>{showGameCompletion(screen.components[12])},6000)
                }
            }
        

    blockUp = () => {

        if (!blockCollisionCheck(block,i)||collideSide=='down'||collideSide=='left'||collideSide=='right'||collideSide==0) {
            block.dy = -3;
            block.dx = 0;
        } else {
            block.dy = 0;
            block.dx = 0;
        }
    }

    blockDown = () => {

        if (!blockCollisionCheck(block,i)||collideSide=='up'||collideSide=='left'||collideSide=='right'||collideSide==0) {
            block.dy = 3;
            block.dx = 0;
        } else {
            block.dy = 0;
            block.dx = 0;
        }
    }

    blockRight = () => {

        if (!blockCollisionCheck(block,i)||collideSide=='left'||collideSide=='up'||collideSide=='down'||collideSide==0) {
            block.dx = 3
            block.dy = 0;
        } else {
            block.dy = 0;
            block.dx = 0;
        }
    }

    blockLeft = () => {

        if (!blockCollisionCheck(block,i)||collideSide=='right'||collideSide=='up'||collideSide=='down'||collideSide==0) {
           block.dx = -3;
           block.dy = 0;
        } else {
           block.dy = 0;
           block.dx = 0;
        }
    }


    blockUpdatePosition = () => {

        console.log(collideSide)
        block.x = parseInt(block.style.left)  + block.dx;
        block.y = parseInt(block.style.top) + block.dy;
        if(block.type=='H'||block.type=='R'){
            block.style.left =  block.x +'px';
        }else{
            block.style.top =  block.y +'px';
        }

        
        
        

    }

}


}
for (let i = 0; i < screen.blocks.length; i++) {
    screen.blocks[i].onclick = () => {
        collideSide = 0
        screen.blocks[i].isDown = true;
        drag(screen.blocks[i],i);
    };
}


const gameloop = () => {
    if (screen.maze.isStarted === 1) {
        screen.maze.ctx.clearRect(0, 0, 1002, 730);
        screen.maze.ctx.fillStyle = '#000';
        screen.maze.ctx.fillRect(0, 0, 1002, 730);
        drawMap();
        screen.maze.ctx.drawImage(screen.gretel.gretel, screen.gretel.x, screen.gretel.y, 26, 26);
        screen.maze.ctx.drawImage(screen.hat.hat, screen.hat.x, screen.hat.y, 50, 51);
        screen.maze.ctx.drawImage(screen.arrow.arrow, screen.arrow.x, screen.arrow.y, 23, 31);
    }

    if (screen.maze.isStarted === 1) {


        if (counterForTimer === 100) {
            startTimer(screen.maze.clockelement, screen.maze);
            counterForTimer = 0;
        }
        counterForTimer++;
    }

    if (screen.swamp.isStarted === 1) {


        if (counterForTimer === 100) {
            startTimer(screen.swamp.labelandTime.clock, screen.swamp);
            counterForTimer = 0;
        }
        counterForTimer++;
    }

    if (screen.pipePuzzle.isStarted === 1) {
        if (counterForTimer === 100) {
            startTimer(screen.pipePuzzle.timerDiv, screen.pipePuzzle);
            counterForTimer = 0;
        }
        counterForTimer++;
    }

    if (screen.blockPuzzle.isStarted === 1) {
        if (counterForTimer === 100) {
            startTimer(screen.blockPuzzle.clockelement, screen.blockPuzzle);
            counterForTimer = 0;
        }
        counterForTimer++;
    }


    window.requestAnimationFrame(gameloop);
}

gameloop();