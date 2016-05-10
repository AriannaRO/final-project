var video = document.getElementById('video');
video.addEventListener('click', function() {
    this.paused?this.play():this.pause();
  },
  false);

video.addEventListener("pause", function() {
      document.getElementById("map").style.display = "";
  });
video.addEventListener("play", function() {
      document.getElementById("map").style.display = "none";
  });

  var locations = [
      ['The Bund', 31.23043,121.4906, 4],
      ['Shanghai Art District', 31.2480, 121.4490, 5],
      ['Lujiazui', 31.2363, 121.5024, 3],
      ['Chong Ming Island', 31.6411, 121.5662, 2],
    ];

var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(31.44037915,121.63986921),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

// var infowindow = new google.maps.InfoWindow();



var marker, i;

    for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    
    return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }



// if paused then show map div