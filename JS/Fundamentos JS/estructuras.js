
// Arrays 
let carrito = ["pizza", "Gaseosas", "Postre"];
console.log(carrito);
let carrito2 = [3, "Papas", "Ensalada"];
console.log(carrito2);

console.log(carrito[0]);
console.log(carrito[1]);  

let usuarios = ["Camila", "Juan"];  

let carrito = ["pizza", "Gaseosas"];

carrito.push("Helado");    // Agrega un elemento al final del array
console.log(carrito);      // ["pizza", "Gaseosas", "Helado"]

carrito.pop();              // Elimina el último elemento del array
console.log(carrito);       // ["pizza", "Gaseosas"]

carrito[0] = "Hamburguesa";  // Modifica el primer elemento del array
console.log(carrito);        // ["Hamburguesa", "Gaseosas"]

console.log(carrito.length);    // Devuelve la cantidad de elementos en el array 



// Objetos 

let cliente = {
    nombre: "Camila",
    edad: 23,
    ciudad: "Medellín",
};
console.log(cliente); 

console.log(cliente);
console.log(cliente.nombre);   
console.log(cliente.edad);   

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }
cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }
delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }

// Junticos 

let pedido = {
    cliente: "camila",
    item: ["pizza", "gaseosa"]
};
console.log(pedido.item[0]);  // pizza

