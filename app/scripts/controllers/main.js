'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('MainCtrl', ['$scope', '$gallery', '$stateParams', '$data_save', function ($scope, $gallery, $stateParams, $data_save) {

      $scope.search = function (search) {
        var promise = $gallery.getGallery(search);
        promise.then(function (data) {
            $scope.photos = data.data.photos.photo;
            $data_save.save($scope.photos);
          }
        );
      };

    }]
  );
