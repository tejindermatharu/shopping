angular.module('app')
  .factory('configuration', function () {
      var some_data; //private data
      return {
          //setter
          save: function (data) {
              some_data = data;
          },
          //getter
          get: function () {
              return some_data;
          }
      }
  })