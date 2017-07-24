window.onload = function(){
	num = prompt("Introduce un numero");
	document.write("<table border = '1'><tr><td>Numero</td><td>Resultado</td></tr>");
		//crear bucle
		for(i=0; i<=10; i++){
			document.write("<tr><td>"+num+" x "+i+"</td><td>"+num * i+"</td></tr>");
		}
	document.write("</table>");
}