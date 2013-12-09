// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([45.51947, -73.56017], 13);

// add an OpenStreetMap tile layer
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var hotLayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors (Humanitarian Team)'
});


// GEOJSON LAYER ------------------------------

function onEachFeature(feature, layer) {
    if (feature.properties) {
        layer.bindPopup(feature.properties.name);
    }
}
pointToLayer = function (feature, latlng) {
    // icones de: https://www.iconfinder.com/iconsets/maki
    var icon = L.icon({
        iconUrl: 'images/library.png',
        iconRetinaUrl: 'images/library@2x.png',
        iconSize:     [24, 24], // size of the icon
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
   });
   return L.marker(latlng, {icon: icon});
}

var geoJsonLayer = L.geoJson(null, {onEachFeature: onEachFeature, pointToLayer: pointToLayer}).addTo(map);

$.getJSON("bibliotheques.geojson", function(json) {
  	geoJsonLayer.addData(json);
});

// LOCATE CONTROL ----------------------------

L.control.locate().addTo(map);

// LAYERS CONTROL ----------------------------

var baseLayers = {"OpenStreetMap": osmLayer, "Humanitaire": hotLayer}
var overlays = {"Bibliothèques": geoJsonLayer}

L.control.layers(baseLayers, overlays).addTo(map);
