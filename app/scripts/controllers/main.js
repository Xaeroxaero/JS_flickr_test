'use strict';

/**
 * @ngdoc function
 * @name jsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsTestApp
 */
angular.module('jsTestApp')
  .controller('MainCtrl', ['$scope', '$search', function ($scope, $search) {
      $scope.search = function (search) {
        $search.doSearch(search);
      };
  }]
  );
