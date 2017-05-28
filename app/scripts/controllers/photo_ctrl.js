'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('PhotoCtrl', ['$scope', '$data_save', '$stateParams', '$exif', '$state', function ($scope, $data_save, $stateParams, $exif, $state) {
    function setSinglePhoto(id) {
      $scope.photos.forEach(function (photo) {
          if (id === photo.id) {
            $scope.photo = photo;
            var promise = $exif.getEXIF($scope.photo.id, $scope.photo.secret);
            promise.then(function success(data) {
                $scope.exifs = data.data.photo.exif;
              }
            );
          }
        }
      );
    }

    $scope.init = function () {
      $scope.photos = $data_save.getData();
      if ($scope.photos === undefined) {
        $state.go('home');
      }
      else {
        setSinglePhoto($stateParams.id);
      }
    };

    $scope.init();
  }
  ])
;
