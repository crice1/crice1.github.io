var varbody2 = window.varbody;
var varicon2 = window.varicon;

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // There are many other possible options, for an exhaustive list see the specs:
    //   https://notifications.spec.whatwg.org/
      self.registration.showNotification('New Service Request', {
        body: varbody2,
        icon: varicon2,
        vibrate: [200, 100, 200, 100, 200, 100, 400]
      })
  );
});

