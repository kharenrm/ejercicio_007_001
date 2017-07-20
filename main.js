var modelos = ["m1", "m2", "m3", "m4", "m5"];
var marcas = ["mazda", "kia", "renault", "audi", "bmw"];
var intervalId;

function generaNumeroAleatorio(max, min){
    return Math.round(Math.random() * (max - min) + min);
}

function getModeloAleatorio(){
	var numeroAleatorio = Math.floor(Math.random() * modelos.length);
    return modelos[numeroAleatorio];
}

function getMarcaAleatoria(){
	var numeroAleatorio = Math.floor(Math.random() * marcas.length);
    return marcas[numeroAleatorio];
}

var Vehiculo = function(){
	this.marca = "";
	this.modelo = ""; 
	this.velocidad = "";
	this.kmRecorridos = "";
	this.metrosAvanza = "";
}
Vehiculo.prototype.init = function(){
	this.marca = getMarcaAleatoria();
	this.modelo = getModeloAleatorio();
	this.velocidad = generaNumeroAleatorio(200, 100);
	this.kmRecorridos = 0;
	this.metrosAvanza = getMetrosQueAvanzaCadaSegundo(this.velocidad);
}
var Motocicleta = function(){
	this.init();
}
Motocicleta.prototype = new Vehiculo();

var Automovil = function(){
	this.init();
}
Automovil.prototype = new Vehiculo();

var Carrera = function(vehiculo1, vehiculo2){
	this.vehiculo1 = vehiculo1;
	this.vehiculo2 = vehiculo2;
	this.distancia = 0;
}
Carrera.prototype.iniciarCarrera = function(){
	intervalId = setInterval(cicloCarrera, 1000);
}
Carrera.prototype.finCarrera = function(){
	clearInterval(intervalId);
}

function getMetrosQueAvanzaCadaSegundo(velocidadEnKmh){
    var metros = velocidadEnKmh*1000/3600;
    return metros;
}

function cicloCarrera(){
	console.log("cicloCarrera");
	if(carrera.distancia<200){
		carrera.distancia += 10;
		pintarAuto(carrera.vehiculo1, "auto1");
		pintarAuto(carrera.vehiculo2, "auto2");

		if(carrera.vehiculo1.kmRecorridos > 1110){
			alert("Primer lugar: Auto 1");
			carrera.finCarrera();
		}else if(carrera.vehiculo2.kmRecorridos > 1110){
			alert("Primer lugar: Auto 2");
			carrera.finCarrera();
		}
	} 
}

function pintarAuto(auto, className) {
	auto.kmRecorridos = auto.kmRecorridos + auto.metrosAvanza;
	var au = document.getElementsByClassName(className);
	auto.kmRecorridos = auto.kmRecorridos + auto.metrosAvanza;
	au[0].style.left = auto.kmRecorridos + "px";
}

var auto1 = new Automovil();
var auto2 = new Automovil();
var carrera = new Carrera(auto1, auto2);

