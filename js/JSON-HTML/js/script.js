var data = [
   {
       tagName: 'div',
       className: 'test-class',
       styles: {
           width: "100px",
           height: "100px",
           background: 'red'
       },
       children: [
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   background: 'blue'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   background: 'brown',
                   float: 'right'
               },
           }
       ]
   }
];



for(var i=0;i<data.length;i++){ 
    var parent=document.createElement(data[i].tagName);
    parent.className=data[i].className;
    parent.style.cssText=getAttributesStyle(data[i].styles);
    document.body.appendChild(parent);

    for(var j=0;j<data[i].children.length;j++){
       var child=document.createElement(data[i].children[j].tagName);
       child.className=data[i].children[j].className;
      child.style.cssText=getAttributesStyle(data[i].children[j].styles);
       parent.appendChild(child);
    }
}



function getAttributesStyle(css){

  var keys= Object.keys(css);
  var cssText=""; 

  for(var i=0;i<keys.length;i++){

      cssText+=keys[i]+" :" +css[keys[i]]+";";
  }
    console.log(cssText);
    return cssText;
   
}

