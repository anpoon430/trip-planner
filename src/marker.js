const mapboxgl = require('mapbox-gl');
const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}
function markerMaker(type, coords){
  let url = iconURLs.activities;
  if (type === 'activity') url = iconURLs.activities;
  else if (type === 'hotel') url = iconURLs.hotels;
  else if (type === 'restaurant') url = iconURLs.restaurants;
  const markerDiv = document.createElement('div');
  markerDiv.style.width = '32px';
  markerDiv.style.height = '39px';
  markerDiv.style.backgroundImage = `url(${url})`;
  return new mapboxgl.Marker(markerDiv).setLngLat(coords);
}

module.exports = {
  markerMaker
}
