// console.log("Hola Mundo");

//Para poder leer HTML desde JS, mandamos a llamar a la etiqueta. Utilizamos .queryselector("nombre de la etiqueta"); recuerda que .queryselector es un metodo de document, el cual es la hoja.

// Tambien tenemos querySelectorAll. Su funcion es llamar a todos los elementos con esa misma etiqueta

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const clase1 = document.querySelector(".clase1");
const id1 = document.querySelector("#id1");

console.log({
h1,
p,
clase1,
id1,
});

//Al utilizar llaves/objeto {} dentro de los parentesis, podemos mandar a llamar a todos las etiquetas de la hoja
// Al ver esto en la consola, tambien podemos abrir cualquier etiqueta y ver todas sus propiedades.