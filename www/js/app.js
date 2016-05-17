// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.service.core', 'app.controllers', 'app.routes', 'app.services', 'app.directives'
// ,
// 'ngCordova',
 
//  'ionic.service.push'

])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
     console.log("ENTREEE");
    var push = new Ionic.Push({
      "debug": true
    });
    push.register(function(token) {
      console.log("Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });
    
    
  });
})

// use it for DEV Notifications
// .config(['$ionicAppProvider', function($ionicAppProvider) {
//   $ionicAppProvider.identify({
//     app_id: 'dbaca092',
//     api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NDExOTk2OS1lM2Q4LTQ0OGMtOGI0My01ZWVlZWEyNzM5M2QifQ.KwaYPlGRBtE-UwDM8VodabJNqrTpAHn59B3DNsCTqLI',
//     dev_push: true
//   });
// }])