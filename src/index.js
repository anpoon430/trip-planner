import { add } from 'gl-matrix/src/gl-matrix/vec3';

const mapboxgl = require('mapbox-gl');
const {markerMaker} = require('./marker');
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5wb29uNDMwIiwiYSI6ImNqa2s1cjZ5NzAzb2Iza3FzMWYxemxiOWIifQ.FMXu8u_Ead1APP8ds2MY4Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

markerMaker('activity',[-74.009, 40.709]).addTo(map);
markerMaker('activity',[-74.10, 40.809]).addTo(map);
markerMaker('hotel',[-74.15, 40.739]).addTo(map);
markerMaker('restaurant',[-74.019, 40.769]).addTo(map);

