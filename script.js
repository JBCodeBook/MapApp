(function(window, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS,
    element = document.getElementById('map-canvas'),
    // map
    map = mapster.create(element, options);

    var marker2 = map.addMarker({
        id: 2,
        lat: 41.794560979468564,
        lng: 12.505898914726755,
        content: 'I like rice'
    });

    for (var i =0; i < 40; i++) {
        map.addMarker({
            id: 2,
            lat: 41.89017578195417 + Math.random(),
            lng: 12.492362507653494 + Math.random(),
            content: 'I like rice'
        });

        var marker = map.addMarker({
            lat: 41.89017578195417 + Math.random(),
            lng: 12.492362507653494 + Math.random(),
            content: '<div style="color: #f00;">I like food</div>'
        });
    }

    map.removeBy(function(marker) {
        return marker.id === 2;
    });

}(window, window.Mapster));