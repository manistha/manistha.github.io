class BlockPuzzle{
	constructor(){
		this.isStarted = 0;
		this.element = utils.createElem('div',S_WIDTH,S_HEIGHT,'images/blank.png');
		this.element.style.background = 'lightBlue'
		screen.components.push(this.element);
		this.canvas = document.createElement('canvas');
		this.canvas.width = 587;
		this.canvas.height = 394;
		this.element.appendChild(this.canvas);
		this.ctx = this.canvas.getContext('2d');
		this.x1=587;
		this.y1=20;
		this.x2=587;
		this.y2=20;
		this.x3=587;
		this.y3=20;
	}


	drawLine(ctx,left,top){
	

		ctx.moveTo(587, 20);
		ctx.lineTo(left, top);
		
		ctx.stroke();
	}

	drawMirror(ctx){
		
	}


}	


