mapboxgl.accessToken = 'pk.eyJ1IjoiZWluc3RlaW5pc2JhZSIsImEiOiJja2R5Y21zM3UzOXZiMndtcXhzb3g1bDRkIn0.QocAIa5LDxqml4VDrNYp8w';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [16, 53], //long lat
  zoom: 3.5
});

// code from the next step will go here!
// var geojson = {
//   type: 'FeatureCollection',
//   features: [{
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-77.032, 38.913]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'Washington, D.C.'
//     }
//   },
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-122.414, 37.776]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'San Francisco, California'
//     }
//   }]
// };

map.on('load', function() {
  // fetch('pipelines.geojson')
  //       .then(response => response.json())
  //       .then((data) => {
      map.addSource('route', {
        'type': 'geojson',
        'data': "pipelines.geojson"
        // {
        //   "type": "FeatureCollection",
        //   "features": 
        //   [
        //     { 
        //       "type": "Feature",
        //       "properties": {
        //         "name": "Nord Stream"
        //       },
        //       "geometry": {
        //         "type": "LineString",
        //         "coordinates": 
        //           [
        //             [28.066389, 60.556667],
        //             [13.639722, 54.14]
        //           ]
        //         }
        //     }, 
        //     {
        //       "type": "Feature",
        //       "properties": {
        //         "name": "Adriatic LNG"
        //       },
        //       "geometry": {
        //         "type": "LineString",
        //         "coordinates": 
        //           [
        //             [12.7486, 45.0593],
        //             [12.363611, 45.048611]
        //           ]
        //         }
        //     }
        //   ]
        // }
    
    });
    map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'butt'
      },
      'paint': {
        'line-color': '#B22222',
        'line-width': 6
      }
    });
  // })
  // .catch(err => console.error(err));
  });

// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});

