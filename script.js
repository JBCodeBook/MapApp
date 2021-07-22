// Add your code here

(function(window, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS,
    element = document.getElementById('map-canvas'),
    // map
    map = mapster.create(element, options);

    map._on('click', function() {
        alert('click');
        console.log(e);
        console.log(this);
    });

    map._on('rightclick', function() {
        alert('right click');
    });

}(window, window.Mapster));