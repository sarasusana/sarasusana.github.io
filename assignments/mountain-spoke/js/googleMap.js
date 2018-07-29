var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.6724254, lng: -111.0914935},
    zoom: 17
  });
}