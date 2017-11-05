/* variables */

var retos = [
	"",
	"Te tomas  solo/a",
	"Se toma el de la izquierda",
	"Se toma el de la derecha",
	"Obligas a tomar",
	"Cultura Chupistica",
	"El patito",
	"Yo Nunca",
	"Declaras tu propia regla",
	"La pelotita",
	"Elijes tu zorra",
	"Versus"
];

function resultado(dadoA, dadoB){
	var r = dadoA+dadoB;
	var reto = retos[r-1];
	return reto;
}