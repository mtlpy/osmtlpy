// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([45.51947, -73.56017], 13);

var pool_icon = L.icon({
    iconUrl: 'http://montrealpython.org/static/img/pool.png',
    iconSize:     [24, 24], // size of the icon
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
   });

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
        iconUrl: '/static/images/library.png',
        iconRetinaUrl: '/static/images/library@2x.png',
        iconSize:     [24, 24], // size of the icon
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
   });
   return L.marker(latlng, {icon: icon});
}

$.getJSON("/static/bibliotheques.geojson", function(json) {
  	L.geoJson(json, {onEachFeature: onEachFeature, pointToLayer: pointToLayer}).addTo(map);
});

$.getJSON("/piscines", function(data) {
    data.result.forEach(function(p) {
        L.marker([p.lat, p.long], {icon: pool_icon}).bindPopup("Piscine <a href='http://google.com'>http://google.com</a>"+p.name).addTo(map);
    });
})
