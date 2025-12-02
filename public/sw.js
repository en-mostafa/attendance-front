self.addEventListener('push', function (event) {
    if (event.data) {
    const data = event.data.json()
    const options = {
        body: data.body,
        icon: '/favicon/web-app-manifest-192x192.png',
        badge: '/favicon/web-app-manifest-192x192.png',
        tag: 'app-notification',
        vibrate: [100, 50, 100],
        requireInteraction: data.persistent || false,
        data: {
            dateOfArrival: Date.now(),
            url: data.url || '/',
        },
        actions: [
            {
                action: 'open',
                title: 'Open App',
            },
            {
                action: 'close',
                title: 'Dismiss',
            },
        ],
    }

    event.waitUntil(
        self.registration.showNotification(data.title || 'Notification', options)
    )
    }
})

self.addEventListener('notificationclick', function (event) {
    event.notification.close()

    if (event.action === 'close') {
        return
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL
    const urlToOpen = event.notification.data.url
    ? baseUrl + event.notification.data.url
    : baseUrl + '/'

    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true,
        }).then(function (windowClients) {
            // Check if app is already open
            for (let i = 0; i < windowClients.length; i++) {
                const client = windowClients[i]
                if (client.url.includes(process.env.DOMAIN_URL) && 'focus' in client) {
                    return client.focus()
                }
            }
            // If not open, open the app
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen)
            }
        })
    )
})

self.addEventListener('notificationclose', function (event) {
    console.log('Notification dismissed:', event)
})