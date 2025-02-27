
// foreach --> permite recorrer un iterable
// se tiene un arreglo y se rrecorre con forEach
let arreglo= [4,6,8,3,5,7];
// Se usa funcion tipo flecha
arreglo.forEach( (valor, indice) =>{ // es como decirle que por cada elemento del iterable haga lo que está dentro de la función
    console.log(valor)
}
)  


// map --> permite aplicar una función a cada elemento del arreglo: más simple de ejecutar que el forEach
// el map devuelve un arreglo con los resultados
function calcularCuadrado(valor){
    return valor**2;
}
let cuadrados = arreglo.map(calcularCuadrado);
// imprimir cuadrados
console.log(arreglo);
cuadrados.forEach((valor, indice) =>{
    console.log(valor);
})


// Filter --> crea un nuevo arreglo con los elementos del arreglo original que cumplen cierta condición
function mayor50(valor){
    return valor>50;
}
let mayores50 = cuadrados.filter(mayor50);
// imprimir resultados
console.log(mayores50);

// tipos de mensaje de consola
console.warn("Advertencia");
console.error("Error");


// Slice --> crea un subconjunto de elementos apartir de un arreglo.
let parte = arreglo.slice(2,4); // devolver de la posición 2 a la 4: es decir 0,1,2,3 ya que 4 es excluyente.
console.info(arreglo);
console.info(parte);


