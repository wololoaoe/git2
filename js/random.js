var value=0;
var tmpvalue=0;

setInterval(function(){
	value=document.getElementById('number').getAttribute('value');
	do{
		tmpvalue=Math.floor((Math.random() * 20) +15);//25+1
	}while(value===tmpvalue);
	document.getElementById("number").setAttribute("value", tmpvalue);
},1000);
