/* variables */

var retos = [
	"",
	"Te tomas  solo/a",
	"Besas al de la izquierda",
	"Besas al de la derecha",
	"Obligas a tomar",
	"Cultura Chupistica",
	"El patito",
	"Rotacion",
	"Declaras tu propia regla",
	"La pelotita",
	"Elijes tu zorra",
	"Perreo Intenso"
];

function resultado(dadoA, dadoB){
	var r = dadoA+dadoB;
	var reto = retos[r-1];
	return reto;
}

/* add events */

document.querySelector("#btnSuerte").onclick =function(){
	var a = random(2, 7);
	setTimeout(function(){
		var b = random(2, 7);
		var r = resultado(a,b);
	document.querySelector(".modal-box").style.display = "block";
	document.querySelector(".modal-box h1").innerHTML = r;
	},500)

}


document.querySelector("#btnContinuar").onclick =function(){
	document.querySelector(".modal-box").style.display = "none";
}
