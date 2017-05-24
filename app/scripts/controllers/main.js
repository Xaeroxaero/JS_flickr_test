'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('MainCtrl', ['$scope', '$gallery','$stateParams', function ($scope, $gallery, $stateParams) {

    function setSinglePhoto(id) {
      $scope.photos.forEach(function (photo) {
        console.log(Number(id));
        if (id === photo.id) {
          $scope.photo = photo;
          console.log(photo)
        }
      });
    }


    $scope.id = [];
    $scope.photos = [];
    $scope.text = '';
    $scope.search = function (search) {
      var promise = $gallery.getGallery(search);
      promise.then(function (data) {
        $scope.photos = data.data.photos.photo;
        // console.log($scope.photos);
        // console.log($scope.photos.id);
        // console.log($stateParams)
      }
      );
    };
      $scope.init = function () {
        // console.log($stateParams.id);
        setSinglePhoto($stateParams.id)
      };

      $scope.init();

  }]
  );
