Requires adding pushkit manually in xCode and push notification capability enabled.

Opens the native push notification prompt:

```js
window.notificationAuthorization.requestNotificationAuthorization(function() {
       console.log('requestNotificationAuthorization')
     })
```
