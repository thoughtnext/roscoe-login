(function() {
  var app = angular.module('app');
  app.factory('AppManager', function($q, $http, $log) {
    var PAGE_ACCESS_TOKEN = 'EAAPYC5m2yusBAOoF2Pi0tiNRp1DEZC84VvOhmOlaenUFMaMYYpVvgx2AwIzQqhsXeDwUriNAo3ZCzZB7TQYEJcGRnWB4huwWyZClVuhlHsOiuOG4BZB5JyBDFeTTbDZCZAzCVfIyZC0yAMPDgopsZCINJ6qIAZCZC2VWF0if5fNOkbq7wZDZD'
      // var baseUrl = 'https://a9ab0a9c.ngrok.io/'
      // var baseUrl = 'http://192.168.1.4:8445/'
    return {
      getFbUserId: function(access_token, account_linking_token) {
        var deferred = $q.defer();
        var url = 'https://graph.facebook.com/v2.6/me?access_token=' + access_token + '&fields=recipient&account_linking_token=' + account_linking_token;
        $http.get(url)
          .then(_success, _error);

        function _success(data) {
          console.log(data.data)
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getUserProfile: function(userID) {
        var deferred = $q.defer();
        // var options = {
        // method: 'GET',
        console.log(userID, PAGE_ACCESS_TOKEN)
        var url = 'https://graph.facebook.com/v2.6/' + userID + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=' + PAGE_ACCESS_TOKEN
        console.log(url)
          // };
        $http.get(url)
          // $http({
          //   method: 'get',
          //   url: url
          // })
          .then(_success, _error);


        // request(options, function(error, response, body) {
        function _error(error) {
          console.log(error)
          deferred.reject(error);
        }

        function _success(data) {
          console.log(data.data)
          deferred.resolve(data.data)
        }
        // });
        return deferred.promise;
      },
      authorize: function(PSID, EMAIL, PASSWORD, FNAME, LNAME, GENDER) {
        var baseUrl = 'https://f6d8ffc8.ngrok.io' 
        var deferred = $q.defer();
        // var options = {
        // method: 'GET',
        // var url = 'https://rushtix.com/wp-json/chatbot/web_connect/?psid=' + PSID + '&web_user_id=' + EMAIL + '&password=' + PASSWORD + '&first_name=' + FNAME + '&last_name=' + LNAME + '&gender=' + GENDER;
        // };
        var url = baseUrl + '/account-linking/?psid=' + PSID + '&web_user_id=' + EMAIL + '&password=' + PASSWORD + '&first_name=' + FNAME + '&last_name=' + LNAME + '&gender=' + GENDER
        $http.get(url)
          .then(_success, _error);


        // request(options, function(error, response, body) {
        function _error(error) {
          console.log(error)
          deferred.reject(error);
        }

        function _success(data) {
          console.log(data.data)
          deferred.resolve(data.data)
        }
        // });
        return deferred.promise;
      }

    }
  });
})();
