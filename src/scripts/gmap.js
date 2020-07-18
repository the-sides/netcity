// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAUnwtc9M27Q3ADuOzCVlR2oNYTyyYAWCQ&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.963180, lng: -83.92324},
        zoom: 16
      })
};

// Append the 'script' element to 'head'
document.head.appendChild(script);


