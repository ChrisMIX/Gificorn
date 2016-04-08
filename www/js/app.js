// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.controller("gifCtrl", function($scope, $http){
  $scope.api = "http://api.giphy.com/v1/gifs/search?";
  $scope.apiKey = "&api_key=dc6zaTOxFJmzC";
  $scope.query = "&q=unicorn";
  $scope.url = $scope.api + $scope.apiKey + $scope.query;
  $scope.trendingUrl = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
  $scope.gifs = [];
  $scope.trendingGifs = [];

  $scope.unicorns = $http.get($scope.url).success(function(data){
    for(var i = 0; i < 24; i++){
    $scope.gifs.push(data.data[i].images.original.url);
    }
  });
  $scope.trending = $http.get($scope.trendingUrl).success(function(data){
    for(var i = 0; i < 24; i++){
      $scope.trendingGifs.push(data.data[i].images.original.url);
    };
  });

   // $(".container").on("submit", ".searchForm", function(e){
   //      e.preventDefault();
   //      var data = $(this).serialize();
   //      console.log(data);

   //      var api = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&";
   //      var query = data;
   //      var url = api + query;
   //      $scope.searchGifs = [];

   //      var results = $http.get(url).success(function(data){
   //        for(var i = 0; i < 24; i++){
   //          $scope.searchGifs.push(data.data[i].images.original.url);
   //        }
   //      });
   //      console.log(url);
   //      console.log($scope.searchGifs);
   //      $(".container").append(results);
   //    })
})

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.trending', {
      url: '/trending',
      views: {
        'tab-trending': {
          templateUrl: 'templates/tab-trending.html',
          controller: 'TrendingCtrl'
        }
      }
    })

  .state('tab.favorites', {
    url: '/favorites',
    views: {
      'tab-favorites': {
        templateUrl: 'templates/tab-favorites.html',
        controller: 'FavoriteCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/search');

});


