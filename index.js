/*
//CLASE 1 - REPASO JS

let paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia", "Venezuela"];
const nombre = "Donna Clark";

function listarPaises(Array) {
    console.log("Listado de países que contiene el array: ");
    console.table(paises);
}
listarPaises();

const tuNombre = "Angeles Rechach"; 

function cambiarNombre() {
    // Intento de reasignar una constante (esto va a tirar error)
    tuNombre = "Dafne Supersónico";
    try { 
        console.log ("Intento cambiar un parámetro: ", tuNombre);     
    } catch (error) {
       console.error("Se ha producido un error.", error);
    } finally {
        console.log("La constante tuNombre no puede redefinirse");
    }
}
cambiarNombre(); 


// CLASE 2 - REPASO 

let producto1 = {idProd: 00112233, nombre: "Henry", tipo: "DP", color: "Negro", tejidoBase: "Bull-13"};
let producto2 = {idProd: 00112234, nombre: "Julien", tipo: "DPR", color: "Maalva" + " - "+ "Canela", tejidoBase: "Tussor"};
let producto3 = {idProd: 00112235, nombre: "Pablo", tipo: "DPR", color: "Smoke", tejidoBase: "Denim"};
let producto4 = {idProd: 00112236, nombre: "Marie", tipo: "DPR", color: "Indigo", tejidoBase: "Denim"};

let productos = [producto1, producto2, producto3, producto4];


console.table(productos);  //muestra el array como fue creado

// Funcion "Ordenar por" simple (un solo parametro de orden)
function ordenarPor(array, campo, orden = 'asc') {
    return array.sort((a, b) => {
      if (typeof a[campo] === 'string') {
        return orden === 'asc'
          ? a[campo].localeCompare(b[campo])
          : b[campo].localeCompare(a[campo]);
      } else {
        return orden === 'asc'
          ? a[campo] - b[campo]
          : b[campo] - a[campo];
      }
    });
  }
  
  ordenarPor(productos,"tejidoBase","asc"); //invoco a la función
  
  console.table(productos); // muestro la tabla ordenada por tejidoBase (redefine el index de los productos dentro del array)
 
// Funcion "Ordenar por" compuesta (2 parametros de orden)
function ordenarPorConSecundario(array, campoPrimario, campoSecundario, orden = 'asc') {
  return array.sort((a, b) => {
    const valorA = a[campoPrimario];
    const valorB = b[campoPrimario];

    let resultado;
    if (typeof valorA === 'string') {
      resultado = valorA.localeCompare(valorB);
    } else {
      resultado = valorA - valorB;
    }

    if (orden === 'desc') resultado *= -1;

    // Si son iguales, ordenar por el campo secundario
    if (resultado === 0) {
      const secA = a[campoSecundario];
      const secB = b[campoSecundario];

      if (typeof secA === 'string') {
        return secA.localeCompare(secB);
      } else {
        return secA - secB;
      }
    }

    return resultado;
  });
}

ordenarPorConSecundario(productos, "tejidoBase", "nombre", "color", "asc"); //Ejecuta la funcion de orden compuesto = solo debo ir agregando el parametro segun prefiera el orden de filtro

console.table(productos); //Imprime por consola la funcion compuesta
*/


console.log ("Esto es un cambio para probar")






