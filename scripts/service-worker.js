function populate_content(){
  var varbody = "Fourth floor mens bathroom: the toilet in the stall is not flushing, please se...";
  var varicon = "service-request_icon.png";
  /*if (window.push_type == "sr"){
    varbody = "Fourth floor mens bathroom: the toilet in the stall is not flushing, please se...";
    varicon = "service-request_icon.png";
  }
  else{
    varbody = "Your reservation for Large Conference Room has been approved! Click for more details.";
    varicon = "conference-room-reservations_icon";
  }*/
}

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    populate_content().then(function(){
    // There are many other possible options, for an exhaustive list see the specs:
    //   https://notifications.spec.whatwg.org/
      self.registration.showNotification('New Service Request', {
        body: varbody,
        icon: varicon,
        vibrate: [200, 100, 200, 100, 200, 100, 400]
      })
    })
  );
});

