

var parent=document.getElementById("main-container");
function Person(image,name,age,address,hobbies,list,experience,weapon,kingdoms){
	this.personImage=image;
	this.personName=name;
	this.personAge=age;
	this.personAddress=address;
	this.personHobbies=hobbies;
	this.personList=list;
	this.personExperience=experience;
	this.personWeapon=weapon;
	this.kingdomsVisited=kingdoms;
	this.ShowImage=function(){
		var childdiv0=document.createElement('div');
    	childdiv0.style.width="380px";
    	childdiv0.style.width="380px";
    	childdiv0.style.margin="auto";
    	parent.appendChild(childdiv0);
    	var childimg=document.createElement('img');
    	childimg.src=this.personImage;
    	childdiv0.appendChild(childimg);

	}
    this.ShowNameAge=function(){
    	var childdiv1=document.createElement('div');
    	childdiv1.style.textAlign="center";
    	childdiv1.style.fontSize="25px";
    	childdiv1.style.fontStyle="bold";
    	parent.appendChild(childdiv1);
    	childdiv1.innerHTML="Name:"+ this.personName;
    	var childdiv2=document.createElement('div');
    	childdiv2.style.textAlign="center";
    	childdiv2.style.fontSize="25px";
    	childdiv2.style.fontStyle="bold";
    	parent.appendChild(childdiv2);
    	childdiv2.innerHTML="Name:"+ this.personName;
    	childdiv2.innerHTML="Age:"+ this.personAge;
    }
   this.ShowKingdomsAndAddress=function(){
   	    var childdiv3=document.createElement('div');
    	childdiv3.style.textAlign="center";
    	childdiv3.style.fontSize="25px";
    	childdiv3.style.fontStyle="bold";
    	parent.appendChild(childdiv3);
    	childdiv3.innerHTML="Kingdoms visited";
    	
    	var childUl1=document.createElement('ul');
    	childUl1.style.listStyle="none";
    	childUl1.style.marginTop="0px";
    	childUl1.style.marginBottom="0px";
    	parent.appendChild(childUl1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.kingdomsVisited[0];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.kingdomsVisited[1]+" ,"+this.personAddress+" (Home)";
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.kingdomsVisited[2];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);
  }
  this.ShowHobbies=function(){
  		var childdiv3=document.createElement('div');
    	childdiv3.style.textAlign="center";
    	childdiv3.style.fontSize="25px";
    	childdiv3.style.fontStyle="bold";
    	childdiv3.style.marginLeft="50px";
    	parent.appendChild(childdiv3);
    	childdiv3.innerHTML="Hobbies";

  		childUl1=document.createElement('ul');
  		childUl1.style.listStyle="none";
  		childUl1.style.marginTop="0px";
    	childUl1.style.textAlign="center";
    	childUl1.style.marginBottom="0px";
    	parent.appendChild(childUl1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personHobbies[0];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personHobbies[1];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personHobbies[2];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);  	
  }
  this.ShowList=function(){
  	var childdiv4=document.createElement('div');
    	childdiv4.style.textAlign="center";
    	childdiv4.style.fontSize="25px";
    	childdiv4.style.fontStyle="bold";
    	childdiv4.style.marginLeft="50px";
    	parent.appendChild(childdiv4);
    	childdiv4.innerHTML=this.personName+"'s list";

  		childUl1=document.createElement('ul');
  		childUl1.style.listStyle="none";
  		childUl1.style.marginTop="0px";
    	childUl1.style.textAlign="center";
    	childUl1.style.marginBottom="0px";
    	parent.appendChild(childUl1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personList[0];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personList[1];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personList[2];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personList[3];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personList[4];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);
  }

  this.ShowExperience=function(){
  	var childdiv5=document.createElement('div');
    	childdiv5.style.textAlign="center";
    	childdiv5.style.fontSize="25px";
    	childdiv5.style.fontStyle="bold";
    	childdiv5.style.marginLeft="50px";
    	parent.appendChild(childdiv5);
    	childdiv5.innerHTML="Experience";

	    var childP=document.createElement('p');
	    childP.style.marginTop="0px";
	    childP.style.marginBottom="0px";
	    childP.style.textAlign="center";
	    childP.innerHTML=this.personExperience;	
	    parent.appendChild(childP);
  }
  this.ShowWeapon=function(){
  	var childdiv6=document.createElement('div');
    	childdiv6.style.textAlign="center";
    	childdiv6.style.fontSize="25px";
    	childdiv6.style.fontStyle="bold";
    	childdiv6.style.marginTop="0px";
    	childdiv6.style.marginLeft="50px";
    	parent.appendChild(childdiv6);
    	childdiv6.innerHTML="Weapons used";

    	childUl1=document.createElement('ul');
  		childUl1.style.listStyle="none";
  		childUl1.style.marginTop="0px";
    	childUl1.style.textAlign="center";
    	childUl1.style.marginBottom="0px";
    	parent.appendChild(childUl1);
    	
    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personWeapon[0];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);

    	childli1=document.createElement('li');
    	childli1.innerHTML=this.personWeapon[1];
    	childli1.style.textAlign="center";
    	childUl1.appendChild(childli1);
  }




}
 
var Arya=new Person("images/arya.png","Arya Stark",13,"Winterfell",["sword-fighting","travelling","making lists"],["Cercie","Meryn Trant","Sandor Clegane","Ilyn Payne","Red woman"],"Internship at the House of Black and White",["needle","valyrian steel dagger"],["Crownlands","The North","Pentos"]) ;
Arya.ShowImage();
Arya.ShowNameAge();
Arya.ShowKingdomsAndAddress();
Arya.ShowHobbies();
Arya.ShowList();
Arya.ShowExperience();
Arya.ShowWeapon();

















// var main=document.getElementById('main-container');
// main.style.width="350px";
// main.style.height="500px";
// main.style.margin="auto";

// var childdiv =document.createElement('div');
// childdiv.style.width='500px';
// childdiv.style.height='500px';
// childdiv.style.backgroundImage='url("arya-stark.jpg")';
// childdiv.style.backgroundColor='red';
// parent.appendChild(childdiv);


// var childul =document.createElement('ul');
// main.appendChild(childul);

// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="name: "+profileObj.name;

// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="age: "+profileObj.age;

// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="hobbie :"+profileObj.hobbies[0]+","+profileObj.hobbies[1];

// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="gender: "+profileObj.gender;

// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="weapon: "+profileObj.weapon;
// var childLi=document.createElement('li');
// childul.appendChild(childLi);
// childLi.innerHTML="address: "+profileObj.address;
