(function() {

  function configureMap(currentLocation) {
    map = new google.maps.Map(document.getElementById('foodMap'), {
      center: currentLocation,
      zoom: 15,
      styles: [{
        stylers: [{
          visibility: 'simplified',
        }]
      }, {
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      }]
      [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
    });
    infoWindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    let input = document.getElementById('pac-input');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    let infowindow = new google.maps.InfoWindow();
    let infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    let marker = new google.maps.Marker({
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(15);
      }

      // Set the position of the marker using the place ID and location.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location
      });
      marker.setVisible(true);

      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-id'].textContent = place.place_id;
      infowindowContent.children['place-address'].textContent =
        place.formatted_address;
      infowindow.open(map, marker);
    });
  }
  ///////////////////////////////////////

  function initMap() {
    let currentLocation = {
      lat: 30.272,
      lng: -97.760
    }
    configureMap(currentLocation);


  }
  ////////////////////////////////////////

  // let locationButton = document.getElementById('current-location');
  // locationButton.addEventListener('click', function() {
  //   getUserLocation();
  // });



  let myMarkers = [];
  //////////////////////////////////////////////
  function performSearch(searchTerm) {
    console.log(searchTerm);
    let request = {
      bounds: map.getBounds(),
      keyword: searchTerm
    };
    service.radarSearch(request, setMarkers);
  }

  function setMarkers(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {

      console.error(status);
      return;
    }
    for (let i = 0, result; result = results[i]; i++) {

      //results.length.Random....
      addMarker(result);


    }
  }
  ///////////////////////////////////////
  function randomSearch(searchTerm) {
    console.log(searchTerm);
    let request = {
      bounds: map.getBounds(),
      keyword: searchTerm
    };
    service.radarSearch(request, randomSetMarkers);
  }

  function randomSetMarkers(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {

      console.error(status);
      return;
    }
      let randomItem = results[Math.floor(Math.random()*results.length)];
      addMarker(randomItem);


  }
  /////////////////////////////////////////////////////

  function addMarker(place) {
    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      icon: {
        url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(10, 15)
      }

    });
    myMarkers.push(marker);


    function removeMarkers() {
      for (i = 0; i < myMarkers.length; i++) {
        myMarkers[i].setMap(null);
      }
    }


    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(place, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        infoWindow.setContent(result.name + '<div><strong>' +
          result.formatted_address + '</div>' + result.website + '</div>' + result.phone_number);
        infoWindow.open(map, marker);
      });
    });

  }

  function configureRestaurantButton() {
    function removeMarkers() {
      for (i = 0; i < myMarkers.length; i++) {
        myMarkers[i].setMap(null);
      }
    }
    let foodButton = document.getElementById('food-button');
    foodButton.addEventListener('click', function() {
      removeMarkers();
      let foodSelectElement = $('#foodType option:selected');
      performSearch(foodSelectElement.text());
    });
  }


  function configureRandomRestaurant() {
    function removeMarkers() {
      for (i = 0; i < myMarkers.length; i++) {
        myMarkers[i].setMap(null);
      }
    }
    let randomButton = document.getElementById('random-button');
    randomButton.addEventListener('click', function() {
      removeMarkers();
      let foodSelectElement = $('#foodType option:selected');
      randomSearch(foodSelectElement.text());
    });
  }


  // function configureSubmitEventListener() {
  //     function removeMarkers() {
  //       for (i = 0; i < myMarkers.length; i++) {
  //         myMarkers[i].setMap(null);
  //       }
  //     }
  //     let foodForm = $("#foodForm");
  //     let randomForm = $("#random-button");
  //     foodForm.submit(function(event) {
  //       console.log("this is working!!!!!")
  //       event.preventDefault();
  //       removeMarkers();
  //       let foodSelectElement = $('#foodType option:selected');
  //       performSearch(foodSelectElement.text());
  //     });
  //     randomForm.submit(function(event) {
  //       console.log("this is my call")
  //       event.preventDefault();
  //       removeMarkers();
  //       let foodSelectElement = $('#foodType option:selected');
  //       performSearch(foodSelectElement.text());
  //     });
  //   }
  //



  // function getUserLocation() {
  //   let userLocation;
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     userLocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     configureMap(userLocation);
  //   });
  //
  // }



  initMap();
  // configureSubmitEventListener();
  configureRestaurantButton();
  configureRandomRestaurant();
  // getUserLocation();
})();
