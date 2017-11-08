parent=document.getElementById('parent');
parent.style.width="800px";
parent.style.height="800px";
parent.style.backgroundColor="#fce4bd";
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
	

	this.dx = 1;
	this.dy = 1;
	
	this.updatePosition=function(){
		this.x=parseInt(this.element.style.left);
		this.y=parseInt(this.element.style.top);

			if(this.y>(parseInt(parent.style.height)-parseInt(this.element.style.height)))
			{
				this.dy=-this.dy;
			}
			if(this.y==0)
			{
				this.dy=-this.dy;
			}

			this.y=this.y+this.dy;
			this.element.style.top=this.y+"px";
			if(this.x>(parseInt(parent.style.width)-parseInt(this.element.style.width)))
			{
				this.dx=-this.dx;
			}
			if(this.x==0)
			{
				this.dx=-this.dx;
			}
			this.x=this.x+this.dx;
			this.element.style.left=this.x+"px";
	}
	
	this.element.onclick=function(){
		var temp=this;
		temp.style.backgroundImage='url("images/blood.png")';
        setTimeout(function(){
        	parent.removeChild(temp);
        },500);
	}

	 var that=this;
	setInterval(function(){	
	that.updatePosition();
	},50);

}

for(var i=0;i<20;i++)
{
	var box = new Box("box"+i);


}


