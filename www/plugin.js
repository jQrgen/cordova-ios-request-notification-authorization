
var exec = require('cordova/exec');

var PLUGIN_NAME = 'notificationAuthorization';

var notificationAuthorization = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  }
};

module.exports = notificationAuthorization;
