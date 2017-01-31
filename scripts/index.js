var endpoint;
var push_type;

// Register a Service Worker.
navigator.serviceWorker.register('service-worker.js')
.then(function(registration) {
  // Use the PushManager to get the user's subscription to the push service.
  return registration.pushManager.getSubscription()
  .then(function(subscription) {
    // If a subscription was found, return it.
    if (subscription) {
      return subscription;
    }

    // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
    // send notifications that don't have a visible effect for the user).
    return registration.pushManager.subscribe({ userVisibleOnly: true });
  });
}).then(function(subscription) {
  endpoint = subscription.endpoint;

  // Send the subscription details to the server using the Fetch API.
  fetch('./register', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: subscription.endpoint,
    }),
  });
});

$("#send_push_sr,#send_push_cr").click(function(){
  if ($(this).attr("id") == "send_push_sr"){
    push_type == "sr";
  }
  else{
    push_type == "cr";
  }
  $(".sending_notification_message").removeClass("sending_notification_message_off");
  $(".delay_display").html($("#notification_delay").val());
  setTimeout(function(){$(".sending_notification_message").addClass("sending_notification_message_off")},$("#notification_delay").val()*1000);

  var delay = $("#notification_delay").val();
  var ttl = 0;

  // Ask the server to send the client a notification (for testing purposes, in real
  // applications the notification will be generated by some event on the server).
  fetch('./sendNotification?endpoint=' + endpoint + '&delay=' + delay +
        '&ttl=' + ttl,
    {
      method: 'post',
    }
  );
})

