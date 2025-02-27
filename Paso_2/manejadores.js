// creamos otro archivo de java para que el que ya se tiene no sea muy exteso

// manejador para botón centroides
let centroides = document.getElementById("centroid") // se crea un objeto que esté asociado al botón 

centroides.addEventListener('click', function(){
    console.log("Vamos a calcular los centroides..."); 
    detectCentroids();
})


// manejador para calcular áreas
let areas = document.getElementById("areas")

areas.addEventListener('click', function(){
    console.log("Vamos a calcular áreas...");
    calculateAreas();  
})

// manejador para calcular distancias entre centroides
let distancias = document.getElementById("centroid distance")

distancias.addEventListener('click', function(){
    console.log("Vamos a calcular las distancias entre los centroides...");
    calculateDistanceCentroids();
})