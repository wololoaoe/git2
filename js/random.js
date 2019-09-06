var value=0;
var tmpvalue=0;

setInterval(function(){
	value=document.getElementById('number').getAttribute('value');
	do{
		tmpvalue=Math.floor((Math.random() * 10)+5);//25+1
	}while(value===tmpvalue);
	document.getElementById("number").setAttribute("value", tmpvalue);
},1000);
