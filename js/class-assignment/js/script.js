parent=document.getElementById('parent');
parent.style.width="1500px";
parent.style.height="950px";
parent.style.margin="auto";
parent.style.position="relative";
parent.style.backgroundColor="#33af5e";

function Box(elementId){
	this.element=document.createElement('div');
	this.element.id=elementId;
	this.element.style.width="40px";
	this.element.style.height="40px";
	this.element.style.backgroundImage='url("images/ant.png")';
	this.element.style.position="absolute";
	this.element.style.top=Math.random()*(parseInt(parent.style.height)-parseInt(this.element.style.height))+"px";
	this.element.style.left=Math.random()*(parseInt(parent.style.width)-parseInt(this.element.style.width))+"px";
	parent=document.getElementById('parent');
	parent.appendChild(this.element);
	

	this.dx = Math.random()*3;
	this.dy = Math.random()*3;
	
	this.updatePosition=function(){
		this.x=parseInt(this.element.style.left);
		this.y=parseInt(this.element.style.top);

			if(this.y>(parseInt(parent.style.height)-parseInt(this.element.style.height)))
			{
				this.dy=-this.dy;
			}
			if(this.y<0)
			{
				this.dy=-this.dy;
			}

			this.y=this.y+this.dy;
			this.element.style.top=this.y+"px";
			if(this.x>(parseInt(parent.style.width)-parseInt(this.element.style.width)))
			{
				this.dx=-this.dx;
			}
			if(this.x<0)
			{
				this.dx=-this.dx;
			}
			this.x=this.x+this.dx;
			this.element.style.left=this.x+"px";
	}
	

}

var play=document.createElement('div');
play.style.width=parent.style.width;
play.style.height=parent.style.height;
play.style.backgroundColor="#af2401" ;
play.style.absolute="absolute";
play.style.top="0px";
play.style.left="0px";
parent.appendChild(play);
playBtn=document.createElement('button');
playBtn.style.backgroundColor="#f7f3f2";
playBtn.style.color="#af2401";
playBtn.style.width="200px";
playBtn.style.height="100px";
playBtn.style.fontSize="30px";
playBtn.style.fontWeight="bold";
playBtn.style.marginLeft="650px";
playBtn.style.marginTop="430px";
playBtn.style.borderRadius="20px";
playBtn.innerHTML="lets kill ants!";
play.appendChild(playBtn);

var counter=0;
function AntKill(temp){
	parent.removeChild(temp);
	counter++;
	console.log(counter);
}
var antArray = [];
var CollisionDetect = function(antArray) {
 	for (i = 0; i < antArray.length ; i++) {
 		for(j = 0; j < antArray.length; j++) {
 			if (antArray[i] != antArray[j]) {
 				var antALeft=parseInt(antArray[i].element.style.left);
 				var antBleft=parseInt(antArray[j].element.style.left);
 				var antATop=parseInt(antArray[i].element.style.top);
 				var antBTop=parseInt(antArray[j].element.style.top);
 				 if (antALeft<(antBleft + 40) && (antALeft + 40) > antBleft && antATop < (antBTop + 40) && ( antATop + 40) > antBTop ){
 				 		antArray[i].dy = -antArray[i].dy;
 				 		antArray[i].dx = -antArray[i].dx;
 					 }
 				}
 			}
 		}
 	}


 	var EndGame=function(){
 		var over=document.createElement('div');
		over.style.width=parent.style.width;
		over.style.height=parent.style.height;
		over.style.backgroundColor="#000000" ;
		over.style.top="0px";
		over.style.left="0px";
		parent.appendChild(over);
		var overimg=document.createElement('div');
		overimg.style.width="600px";
		overimg.style.height="400px";
		overimg.style.backgroundImage='url(images/gameover.png)';
		overimg.style.position="absolute";
		overimg.style.top="250px";
		overimg.style.left="470px";
		over.appendChild(overimg);
 	}

playBtn.onclick=function(){
	
	
	for(var i=0;i<20;i++) {
		var box = new Box("box"+i);

		antArray.push(box);
		console.log(antArray);
	}
	play.style.display="none";

for(var i=0;i<parent.children.length;i++) {
	 
		 parent.children[i].onclick =function(){
		 	
		 	
		 if(counter==(antArray.length))
			{	
				EndGame();
			}
		 var temp=this;
 		 this.style.backgroundImage='url("images/blood.png")';
 		 setTimeout(function(){
 		 AntKill(temp);
         },500);
 	}
}
setInterval(function(){	
	for(i=0;i<antArray.length;i++) {	
		 antArray[i].updatePosition();
		 	CollisionDetect( antArray);
		 
	}
},5);

}












