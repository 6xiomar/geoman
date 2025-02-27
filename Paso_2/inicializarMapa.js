var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.pm.addControls({
    position:'topleft',
    drawCircle: false // quitar control del circulo. Se pueden quitar tantos como se quiera.
})

// vamos a crear 3 eventos

// 1. Cuando yo cree un objeto espacial, lo guarde en un arreglo de objetos espaciales. 

// definir 2 arreglos vacíos

let drawnLayers = [];
let IntersectionsLayers = [];

// manejadores de eventos (sería bueno que estén en otro archivo)

map.on("pm:create", function(e){ // cuando ocurra el evento de editar mapa. e recoje los datos del evento
    let myLayer = e.layer; // ya tengo en el objeto la capa que crearon en el evento
    // si es un polígono, lo guarda en el arreglo drawnLayers
    if(myLayer instanceof L.Polygon){
        // Agregar al arreglo drawnLayers
        drawnLayers.push(myLayer);
        console.info("Has creado un polígono");
    }
})

// 2. Si lo borran, que lo quite del arreglo de objetos espaciales 

map.on("pm:remove", function(e){ // evento remover capa del mapa 
    
    // filtrar las capas, menos las que borraron
    drawnLayers = drawnLayers.filter((layer)=> layer != e.layer);
    console.info("Has eliminado un polígono");
})

