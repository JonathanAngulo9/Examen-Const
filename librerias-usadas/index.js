const paqueteSuma = require('2025a-swgr2-dcsm-suma');
const paqueteResta = require('2025a-swgr2-jsaq-resta');
const paqueteMultiplicacion = require('2025a-swgr2-dcsm-multiplicacion');
const paqueteDivicion = require('2025a-swgr2-jsaq-divicion');

const respuestaS = paqueteSuma.suma(2, 1);
const respuestaR = paqueteResta.resta(3, 2);
const respuestaM = paqueteMultiplicacion.multiplicacion(2, 5);
const respuestaD = paqueteDivicion.divicion(9, 3);

console.log('La respuesta es a la suma es: ', respuestaS);
console.log('La respuesta es a la resta es: ', respuestaR);
console.log('La respuesta es a la multiplicacion es: ', respuestaM);
console.log('La respuesta es a la divicion es: ', respuestaD);