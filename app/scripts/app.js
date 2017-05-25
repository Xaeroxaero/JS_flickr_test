'use strict';

/**
 * @ngdoc overview
 * @name jsTestApp
 * @description
 * # jsTestApp
 *
 * Main module of the application.
 */
angular
  .module('jsTestApp', ['ui.router'])
  .config(function ($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        name: 'home',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('photo',{
        name: 'photo',
        url: '/photo/:id',
        templateUrl: 'views/photo.html',
        controller:'PhotoCtrl'
      });
  });
