var main=document.getElementById('main-container');
main.style.position="relative";
main.style.width="500px";
main.style.height="600px";
main.style.margin="0px";
main.style.overflow="hidden";
 
var images=['images/mtn1.jpg','images/mtn3.jpg','images/mtn4.jpg']


var childUl =document.createElement('ul');
childUl.style.listStyle="none";
childUl.style.position="absolute";
childUl.style.width="5000px"
childUl.style.left="0px";
main.appendChild(childUl);

for(var i=0;i<images.length;i++)
{
  var childLi =document.createElement('li');
  childLi.style.width="500px";
  childLi.style.height="500px";
  childLi.style.float="left";
  childUl.appendChild(childLi);
  var img=document.createElement('img');
  img.setAttribute("src",images[i]);
  childLi.appendChild(img);
}



var childDiv =document.createElement('button');
childDiv.type="button";
childDiv.style.width="50px";
childDiv.style.height="20px";
childDiv.style.marginTop="500px";
childDiv.innerHtml="next";
childDiv.id="next";


main.appendChild(childDiv);

var childDiv =document.createElement('button');
childDiv.type="button";
childDiv.style.width="50px";
childDiv.style.height="20px";
childDiv.style.marginTop="500px";
childDiv.style.float="left";
childDiv.innerHtml="previous";
childDiv.id="previous";
main.appendChild(childDiv);
 
 var counter1=0;
 var buttonNext=document.getElementById('next');
 buttonNext.onclick=function(){
  counter1++;
 	var i=0; 
 	function myLoop1() {          
   var animaationInterval= setInterval(function () { 
       var x=parseInt(childUl.style.left);
       childUl.style.left=(x-1)+"px";                 
       i++;                   
        if(i%500==0){clearInterval(animaationInterval);}

   }, 1)
  } 
myLoop1();
if(counter1==images.length)
{
  for(var i=0;i<images.length;i++)
{
  var childLi =document.createElement('li');
  childLi.style.width="500px";
  childLi.style.height="500px";
  childLi.style.float="left";
  childUl.appendChild(childLi);
  var img=document.createElement('img');
  img.setAttribute("src",images[i]);
  childLi.appendChild(img);
}
counter1=0;
}
}

var buttonPrev=document.getElementById('previous');
 buttonPrev.onclick=function(){
 var i=0; 
 if(counter1!==0)
{
  for(var i=0;i<images.length;i++)
  {
    myLoop1();

  }
  counter1--;
  }
 	function myLoop1() {          
    var animaationInterval= setInterval(function () { 
       var x=parseInt(childUl.style.left);
       childUl.style.left=(x+1)+"px";                 
       i++;                   
        if(i%500==0){clearInterval(animaationInterval);}
   }, 1)
  } 

  if(counter1==0){
  	var animaationInterval= setInterval(function () { 
       var x=parseInt(childUl.style.left);
       childUl.style.left=(x-5)+"px";                 
       i++;                   
        if(i>200){clearInterval(animaationInterval);}
   }, 1)
   counter1=2;	
  }


}

































// var childDiv=document.createElement('div');
// childDiv.type="button";
// childDiv.placeholder="previous";
// main.appenChild(childDiv);







// var div=document.getElementsByTagName('div')[1];
 
//  var someFunc=function(x){
 	
//  			return function(){div.style.display="none";}

//  	};
// function slide(){
// for(var i=0;i<500;i++){
// 	setInterval(someFunc(i),2000);
// }}
// slide();


//  var someFunc=function(x){
//  			return function(){
//  				console.log(x)
 			
//  		}
 	   
//  	};

//  function counter(){
//  	for(var i=0;i<10;i++){
//  		setTimeout(someFunc(i),10000);
//  	}
//  }

// counter();
