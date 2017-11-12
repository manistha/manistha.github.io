



var parent=document.createElement('div');
parent.style.width="500px";
parent.style.height="500px";
parent.style.backgroundColor="#69c8f4";
parent.style.position="relative";


var div=document.getElementsByTagName('div')[0];
div.appendChild(parent);




var parentDiv=document.getElementsByTagName('div')[1];

var ul=document.createElement('ul');
div.appendChild(ul);

for(var i=0;i<20;i++){

var childDiv =document.createElement('div');
childDiv.style.width="20px";
childDiv.style.height="20px";
childDiv.style.backgroundColor="#4d99bc";
childDiv.style.position="absolute";
childDiv.style.top=Math.random()*450+"px";
childDiv.style.left=Math.random()*450+"px";
parentDiv.appendChild(childDiv);
  
}

for(var i=0;i<parentDiv.children.length;i++)
	
 parentDiv.children[i].onclick =function(){
 	li=document.createElement('li');
 	li.innerHTML=this.style.top+","+this.style.left;
 	ul.appendChild(li);
 	parentDiv.removeChild(this);
 }



