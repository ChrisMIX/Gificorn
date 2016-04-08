angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, $http) {
  $scope.api = "http://api.giphy.com/v1/gifs/search?";
  $scope.apiKey = "&api_key=dc6zaTOxFJmzC";
  $scope.query = "&q=unicorn";
  $scope.url = $scope.api + $scope.apiKey + $scope.query;
  $scope.trendingUrl = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
  $scope.gifs = [];
  $scope.trendingGifs = [];

  $(".container2").on("submit", ".searchForm2", function(e){
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        var api = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&";
        var query = data;
        var url = api + query;
        $scope.searchGifs = [];

        var results = $http.get(url).success(function(data){
          for(var i = 0; i < 24; i++){
            $scope.searchGifs.push(data.data[i].images.original.url);
          }
        });
        console.log(url);
        console.log($scope.searchGifs);
        $(".container2").append(results);
      })
})

.controller('TrendingCtrl', function($scope) {})

.controller('FavoritesCtrl', function($scope) {})