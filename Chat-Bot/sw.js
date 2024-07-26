self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: "mchat_logo.jpg",
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});