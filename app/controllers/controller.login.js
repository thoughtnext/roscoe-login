(function() {
  angular.module('app')
    .controller('login', function($scope, $location, $window, $route, md5, AppManager) {
      var abc = $route.current.params
      console.log(abc)
      var account_linking_token = abc.account_linking_token
      var access_token = 'EAAPYC5m2yusBAKjAO2zvLHzkH8Fbv92copp3NYp12u7v7udMJYRqZArTO4eRFUHaDXvo9ZCZCvgzspWVZCyiDMw1d8lDdrvvfRJNv2nBSJN88QZC8afCwon1neLSMQZBeuwVII071PwvYjuZBsyyYVOf8LMx17F8mcAX1I4FAtATNHfL4NSNPLw'
      $scope.login = function() {
        var username = ($scope.username)
        var pass = $scope.password
          // var pass = md5.createHash($scope.password)
        return AppManager.getFbUserId(access_token, account_linking_token)
          .then(function(result) {
            console.log(result)
            user_fb_id = result.recipient
              console.log(username, pass, user_fb_id)
              // user_fb_id = 3456789
              return AppManager.getUserProfile(user_fb_id)

            //     AppManager.chatbotLogin(username, pass, user_fb_id)
            //       .then(function(result) {
            //         console.log(result)
            //         if (result.success == 'true') {
            //           $scope.showErrormsg = false

            //           console.log($scope.showErrormsg)
            //           $window.location.href = abc.redirect_uri + '&authorization_code=success'

            //         } else {
            //           $scope.showErrormsg = true
            //           console.log($scope.showErrormsg)
            //         }
            //       })
          })
          .then(function(result) {
            console.log(result)
            // user_fb_id = 3456789
            //   //username = 'jill@rushtix.com'
            // username = 'j'
            // pass = 'Baddog13!'
            // first_name = 'abc'
            // last_name = 'abc'
            // gender = 'abc'
              //pass = 'Bog13!'
              return AppManager.authorize(user_fb_id, username, pass, result.first_name, result.last_name, result.gender)
            // return AppManager.authorize(user_fb_id, username, pass, first_name, last_name, gender)

          })
          .then(function(result) {
            console.log(result)
            if(result.STATUS){
              $window.location.href = abc.redirect_uri + '&authorization_code=success'
            }
          })
      }
    });
})();
