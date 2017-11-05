// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor((Math.random() * (max - min) + min));
}

function enviarDatos() {
	getRandomArbitrary(2,7);
}
