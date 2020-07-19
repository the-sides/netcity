// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAUnwtc9M27Q3ADuOzCVlR2oNYTyyYAWCQ&callback=initMap';
script.defer = true;
script.async = true;

const pntToCoord = (pnt) => {
    let lat = pnt.lat();
    lat = lat.toFixed(4);
    let lng = pnt.lng();
    lng = lng.toFixed(4);
    return {lat, lng}
}

const displayCoordinates = (pnt) => {
    const {lat, lng} = pntToCoord(pnt)
    console.log("Latitude: " + lat + "  Longitude: " + lng);
}

const clickCoordinates = (pnt) => {
    const {lat, lng} = pntToCoord(pnt)
    console.log("Clicked Latitude: " + lat + "  Longitude: " + lng);
    
    const marker = new google.maps.Marker({
        position: pnt,
        map: map,
        title: 'Hello World!'
      });
}

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.963180, lng: -83.92324},
        zoom: 16
      })
    // google.maps.event.addListener(map, 'mousemove', function (event) {
    //     displayCoordinates(event.latLng);               
    // });
    google.maps.event.addListener(map, 'click', function (event) {
        clickCoordinates(event.latLng);               
    });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);


