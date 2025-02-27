// inicializar bibliotecas para que se visualicen los mapas en la página web
// para ello se busca en la documentación las instrucciones

// primero se crea el objeto de tipo  mapa (copiado de documentación)
var map = L.map('map').setView([51.505, -0.09], 13); // la biblioteca Leafleat es L, setView tiene latitud,longitud y zoom in del mapa

// agregar mapa base (copiado de documentación)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// colocar controles de geoman
map.pm.addControls( //pm hace referencia a geoman
    {
        // dónde quiero que aparezcan los controles
        position: 'topleft',
        drawMarker: true // control de dibujar marcador
    }
)