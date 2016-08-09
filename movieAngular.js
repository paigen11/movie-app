var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

	var movieNpURL = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
    $scope.imagePath = 'http://image.tmdb.org/t/p/w300/';

    $scope.myStyle = {"background-color": "purple"};

    $http({
    	method: "GET",
    	url: movieNpURL	
    })
    .then(function successFunction(movieData){
    		$scope.movieArray = movieData.data.results;
	    }, function failureFunction(movieData){
    		console.log(movieData);

	    }
    );

    $scope.getNewMovieStuff = function(){
    	$http({
    		method: "GET",
    		url: movieURL + $scope.searchbar
    	})
    	.then(function successFunction(searchData){
    		$scope.movieArray = searchData.data.results;
    	}, function failureFunction(searchData){
    		console.log(searchData);
    	})
    };

});