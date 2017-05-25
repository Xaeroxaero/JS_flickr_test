'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('PhotoCtrl', ['$scope', '$data_save', '$stateParams', '$exif', function ($scope, $data_save, $stateParams, $exif) {

    function setSinglePhoto(id) {
      $scope.photos.forEach(function (photo) {
          if (id === photo.id) {
            $scope.photo = photo;
            var promise = $exif.getEXIF($scope.photo.id, $scope.photo.secret);
            promise.then(function (data) {
              $scope.exif = data.data.photo.exif;
              console.log($scope.exif);
              return $scope.photo;
            });
          }
        }
      );
    }

    $scope.init = function () {
      $scope.photos = $data_save.getData();
      setSinglePhoto($stateParams.id);
    };

    $scope.init();
  }
  ])
;
