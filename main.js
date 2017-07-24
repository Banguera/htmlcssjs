var pokemon = {
	"count": 811,
	"previous": null,
	"results": [{
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/",
		"name": "bulbasaur"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/",
		"name": "ivysaur"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/",
		"name": "venusaur"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/",
		"name": "charmander"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/",
		"name": "charmeleon"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/6\/",
		"name": "charizard"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/7\/",
		"name": "squirtle"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/8\/",
		"name": "wartortle"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/9\/",
		"name": "blastoise"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/10\/",
		"name": "caterpie"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/11\/",
		"name": "metapod"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/12\/",
		"name": "butterfree"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/13\/",
		"name": "weedle"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/14\/",
		"name": "kakuna"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/15\/",
		"name": "beedrill"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/16\/",
		"name": "pidgey"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/17\/",
		"name": "pidgeotto"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/18\/",
		"name": "pidgeot"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/19\/",
		"name": "rattata"
	}, {
		"url": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/20\/",
		"name": "raticate"
	}],
	"next": "http:\/\/pokeapi.co\/api\/v2\/pokemon\/?offset=20"
}

//console.log('pokemon', pokemon);

//OJOOO
//ESTAS 3 LINEAS DE CODIGO MUESTRAN EL PRIMER OBJETO DEL JSON
/*for(var key in pokemon.results) {
	for (var i in pokemon.results[0]){
		
		document.write("<br>"+i+" -- "+pokemon.results[0][i]);
		*/
	
//OJOOOOO
//esta linea de codigo es buena, imprime pero solo la primera linea 20 veces
//for(var key in pokemon.results) {
	tableHead = '<tr>'+
             '<td>Url</td>'+
             '<td>Nombre</td>'+
             '</tr>';
	for (var i = 0; i<pokemon.results.length; i++){
		document.write("<br>"+i+" -- "+pokemon.results[i].url);
		document.write("<br>"+i+" -- "+pokemon.results[i].name);

		console.log(pokemon.results[i]);	
		
		
	}

// ARROJA LOS 20 DATOS PERO COMO JSON
	/* for (var i = 0; i<pokemon.results.length; i++){
		
		document.write("<br>"+i+" -- "+pokemon.results[i]);
	*/
