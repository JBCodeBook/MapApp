(function(window, google, mapster) {

    mapster.MAP_OPTIONS = {
          center: {
              lat: 41.89017578195417, 
              lng: 12.492362507653494
          },
          zoom:10,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          //mapTypeId: google.maps.MapTypeId.SATELLITE,
          zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM,
              style: google.maps.ZoomControlStyle.DEFAULT
          },
          panControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          cluster: {
              options: {
                  styles: [{
                      url: 'https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m2.png',
                      height: 56,
                      width: 55,
                      textColor: '#F00',
                      textSize: 18
                  },{
                      url: 'https://raw.githubusercontent.com/googlearchive/js-marker-clusterer/gh-pages/images/m1.png',
                      height: 56,
                      width: 55,
                      textColor: '#F00',
                      textSize: 18
                  }]
              }
          }
      };
  
  }(window, google, window.Mapster || (window.Mapster = {})))