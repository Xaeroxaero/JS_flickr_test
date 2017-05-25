'use strict';

/**
 * @ngdoc service
 * @name jsTestApp.photo
 * @description
 * # photo
 * Service in the jsTestApp.
 */
angular.module('jsTestApp')
  .service('$exif', ['$http', function ($http) {
    var API_key = '9d5b9be285c23f890257a6beed09df05';
    var service_url = 'https://api.flickr.com/services/rest/';
    this.getEXIF = function (id, secret) {
      var params = {
        api_key: API_key,
        photo_id: id,
        secret: secret,
        format: 'json',
        nojsoncallback: 1,
        method: 'flickr.photos.getExif'
      };

      return $http({method: 'GET', url: service_url, params: params});
    };
  }]);
