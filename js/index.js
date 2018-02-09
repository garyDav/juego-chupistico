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
var r = new Random(Random.engines.mt19937().seedWithArray([0x12345678, 0x90abcdef]));
document.querySelector("#btnSuerte").onclick =function(){
	var a = r.integer(1, 6);
	console.log(a);
	setTimeout(function(){
		var b = r.integer(1, 5);
		console.log(b);
		var re = resultado(a,b);
		document.querySelector(".modal-box").style.display = "block";
		document.querySelector(".modal-box h1").innerHTML = re;
	},300);

}


document.querySelector("#btnContinuar").onclick =function(){
	document.querySelector(".modal-box").style.display = "none";
}
