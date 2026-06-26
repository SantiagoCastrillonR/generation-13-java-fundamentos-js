
let nombreCliente = "Pedro";
console.log("Cliente: " + nombreCliente);
// let es para declarar variables que pueden cambiar su valor, mientras que const es para declarar variables cuyo valor no puede cambiar.   
let nombreCliente1 = "Ana";
console.log(nombreCliente1);

let monto = 50000;
console.log("Monto: " + monto);

console.log(5 + 5); //suma de enteros
console.log("5" + "5"); //concatenación de strings

let cliente = "Ana";
let ciudad = "Bogotá";
console.log("Cliente " + cliente + " desde " + ciudad);
//Se puede concatenar con el operador +, pero también se puede hacer con comillas invertidas (backticks) y ${} para insertar variables dentro de un string.

let cliente1 = "Ana";
let valor = 3000;
console.log("Cliente:", cliente1, "- Domicilio: $", valor);
//Es buen apractica hacerlo con +, porque las comas no concatena, solo imprime un valor frente a otro, por lo que si se hace con comas se imprime  valores por separado. con + se imprime solo un valor, entonces es mas ligero

let c1 = "Ana";
let p1 = "celular";
let v1 = 3000;
console.log (c1 + " - " + p1 + " - $" + v1);


// Reglas para las variables:
// 1. No pueden iniciar con números.
// 2. No pueden contener espacios.
// 3. No pueden contener caracteres especiales, excepto el guion bajo (_) y el signo de dólar ($).
// 4. No pueden ser palabras reservadas del lenguaje (como let, const, var, etc.).  
// 5. Se recomienda usar nombres descriptivos y en camelCase para las variables (por ejemplo: nombreCliente, montoTotal, etc.).
// 6. No usar Ñ 


// El de la profe:

// Hola estoy programando
// Esto es un comentario esto no lo ve JS
let nombreCliente = "Pedrito";
console.log("Cliente: " + nombreCliente);
// Acordame que let va siempre antes de declarar la variable
let nombreCliente1 = "Ana";
console.log(nombreCliente1);
//
let monto = 50000;
console.log("Monto a pagar: " + monto);
// Aca tambien funciona 
console.log(5 + 5); // → Suma
console.log("5" + "5"); // → Une--Concatena
let cliente = "Ana";
let ciudad = "Bogotá";
console.log("Cliente " + cliente + " desde " + ciudad + " monto a pagar: " + monto );

let cliente2 = "Ana";
let valor = 3000;
console.log("Cliente:", cliente2, "- Domicilio: $", valor);

//! Reglas para las variables: 
//* 1. Inicia en minúscula
//* 2. NO lleva espacios
//* 3. CamelCase nombreCliente     SnakeCase nombre_cliente


