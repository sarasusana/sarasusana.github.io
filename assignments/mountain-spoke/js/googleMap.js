var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.672389, lng:  -111.090750},
          zoom: 15
        });
      }