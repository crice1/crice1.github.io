// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // There are many other possible options, for an exhaustive list see the specs:
    //   https://notifications.spec.whatwg.org/
    if (push_type == "sr"){
      self.registration.showNotification('New Service Request', {
        body: 'Fourth floor mens bathroom: the toilet in the stall is not flushing, please se...',
        icon: 'service-request_icon.png',
        vibrate: [200, 100, 200, 100, 200, 100, 400]
      })
    }
    else{
      self.registration.showNotification('Reservation Approved', {
        body: 'Your reservation for Large Conference Room has been approved! Click for more details.',
        icon: 'conference-room-reservations_icon',
        vibrate: [200, 100, 200, 100]
      })
    }
  );
});

