function detectCentroids(){
    // la funcion va a recorrer 
    drawnLayers.forEach(
        function(layer){
            // como se va a hacer algo que puede fallar por errores en el polígono dibujado
            // se utiliza una función para operaciones que tienen altas probabilidades de fallar
            try{              
                let centroid = turf.centroid(layer.toGeoJSON());
                L.geoJSON(centroid, {
                    style: {
                        color:"red",
                        fillColor: "green"
                    }
                }).addTo(map)
                console.log(centroid);

            }catch(error){
                console.warn("Error al detectar centroides", error)
            }
        } 
    )
}

function calculateAreas(){
    drawnLayers.forEach(
        function(layer){
            try{
                let area = turf.area(layer.toGeoJSON());
                // colocar una etiqueta en el centroide del polígono
                let centroid = turf.centroid(layer.toGeoJSON());
                // hay que pasar las coordenadas del centroide 
                x=centroid.geometry.coordinates[1];
                y=centroid.geometry.coordinates[0];
                L.marker([x,y], { // se hace así porque no se puede pasar el orden de las coordenadas del centroide
                    icon: L.divIcon(
                        {
                            className: "areaLabel",
                            html: `${area} m2`
                        }

                    )
                }
                ).addTo(map);
                console.log(area) 
            }catch(error){
                console.warn("Hubo un error al calcular el área.")
            }
        }
    )
}