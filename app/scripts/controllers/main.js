'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('MainCtrl', ['$scope', '$gallery', function ($scope, $gallery) {
    $scope.photos = [];
    $scope.text = '';
    $scope.search = function (search) {
      $scope.loading = true;
      var promise = $gallery.getGallery(search);
      promise.then(function (data) {
        $scope.photos = data;
        console.log($scope.photos);
      }
      );
    };
  }]
  );
