
var exec = require('cordova/exec');

var PLUGIN_NAME = 'notificationAuthorization';

var notificationAuthorization = {
  requestNotificationAuthorization: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'requestNotificationAuthorization', []);
  }
};

module.exports = notificationAuthorization;
