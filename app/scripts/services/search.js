'use strict';

/**
 * @ngdoc service
 * @name jsTestApp.search
 * @description
 * # search
 * Service in the jsTestApp.
 */
angular.module('jsTestApp')
  .service('$search', ['$gallery', function ($gallery) {
    this.doSearch = function (search) {
      var self = this;
      self.id = [];
      self.photos = [];
      self.text = '';
      $gallery.getGallery(search).then(function (data) {
        self.photos = data.data.photos.photo;
          console.log(self.photos);
        }
      );
    };
    }
  ]);
