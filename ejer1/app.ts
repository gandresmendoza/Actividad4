"use strict";
let numero = 75;
let nombre3 = "Deider";
let nombre1 = "German";
let nombre2 = "Airin";

console.log("numero");
console.log(`el numero es ${numero}`);
console.log(`el nombre es ${nombre1}`);
console.log(`el nombre es ${nombre2}`);
console.log(`el nombre es ${nombre3}`);
let lista = ["Riohacha ", "Maicao", "Dibulla"];
console.log(lista);
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
}
lista.forEach(element => {
    console.log(element);
});
let tuple = [1, "Deider Blanco"];
console.log(tuple[1]);
let tuple2 = [1, "Deider", "Blanco", 44];
console.log(tuple2[1]);
tuple2.forEach(element => {
    console.log(element);
});
let miVariable = "Saludos";
console.log(miVariable);
miVariable = 75;
console.log(miVariable);
const persona1 = {
    cedula: 11281837,
    nombre: "Deider",
    apellido: "Blanco",
    edad: 23
};
console.log(persona1.nombre + persona1.apellido);
