(function(window, google, mapster) {

    mapster.MAP_OPTIONS = {
          center: {
              lat: 42.99700650893111,
              lng: -81.2041020045284
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
          }
      };
  
  }(window, google, window.Mapster || (window.Mapster = {})))