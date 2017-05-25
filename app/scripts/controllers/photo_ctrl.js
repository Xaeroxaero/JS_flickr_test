'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('PhotoCtrl', ['$scope', '$data_save', '$stateParams', function ($scope, $data_save, $stateParams) {

    function setSinglePhoto(id) {
      $scope.photos.forEach(function (photo) {
        if (id === photo.id) {
          $scope.photo = photo;
          console.log($scope.photo);
          return $scope.photo;
        }
      });
    }

    $scope.init = function () {
      $scope.photos = $data_save.getData();
      setSinglePhoto($stateParams.id);
    };

    $scope.init();
  }]);
