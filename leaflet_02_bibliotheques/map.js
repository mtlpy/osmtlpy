// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([45.51947, -73.56017], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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

$.getJSON("bibliotheques.geojson", function(json) {
  	L.geoJson(json, {onEachFeature: onEachFeature, pointToLayer: pointToLayer}).addTo(map);
});
