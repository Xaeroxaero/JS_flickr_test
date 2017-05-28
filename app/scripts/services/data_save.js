'use strict';

/**
 * @ngdoc service
 * @name jsTestApp.dataSave
 * @description
 * # dataSave
 * Service in the jsTestApp.
 */
angular.module('jsTestApp')
  .service('$data_save', function () {
    this.save = function (photos) {
      this.photos = photos;
    };
    this.getData = function () {
      return this.photos;
    };
  }
  );
