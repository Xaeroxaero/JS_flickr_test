'use strict';

/**
 * @ngdoc service
 * @name jsTestApp.photo
 * @description
 * # photo
 * Service in the jsTestApp.
 */
angular.module('jsTestApp')
  .service('$gallery', ['$http', function ($http) {
    var API_key = '9d5b9be285c23f890257a6beed09df05';
    var service_url = 'https://api.flickr.com/services/rest/';
    this.getGallery = function (search) {
      var params = {
        api_key: API_key,
        format: 'json',
        nojsoncallback: 1,
        method: (search !== null && search.length > 0) ? 'flickr.photos.search' : 'flickr.photos.getRecent'
      };
      if ((search !== null && search.length > 0)) {
        params.text = search;
      }
      return $http({method: 'GET', url: service_url, params: params});
    };
  }]);
