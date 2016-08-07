$(document).ready(function(){
	// this is the base URL for all our API calls
	var apiBaseUrl = "http://api.themoviedb.org/3/";
	// this is the base url for all the images 
	// after the / comes the width. e.g. imageBaseUrl + 'w300' + poster_path
	var imageBaseUrl = "http://image.tmdb.org/t/p/";
	// The query string, including the API key
	var apiKey = "?api_key=fec8b5ab27b292a68294261bb21b04a5";
	var npURL = apiBaseUrl + "movie/now_playing" + apiKey;
	var searchURL = apiBaseUrl + "search/movie" + apiKey;
	var genreUrl = apiBaseUrl + "genre/movie/list" + apiKey;
	var genreObject;

	// begin with set of now playing movies until user makes a search
	$.getJSON(npURL, function(nowPlayingData){
		console.log(nowPlayingData);
		var npHTML = '';
		for(var i = 0; i < nowPlayingData.results.length; i++){
			npHTML += '<div class="col">';
				npHTML += '<span>'+ nowPlayingData.results[i].title+'</span>';
				var posterUrl = imageBaseUrl + 'w300'+ nowPlayingData.results[i].poster_path;
				var bigImage = imageBaseUrl + 'w780'+ nowPlayingData.results[i].poster_path;
				var overview = nowPlayingData.results[i].overview;
					npHTML += '<span class="overview">'+nowPlayingData.results[i].overview+'</span>';
				npHTML +='<a class="single_image" href="'+bigImage+'"><img src="'+ posterUrl+ '"></a>';
			npHTML +='</div>';

		}
		$('.poster-grid').html(npHTML);
		$(".single_image").fancybox();

	});

	//add click listener for when user makes search
	$('.button').click(function(){

		var movie = $('.searches').val();
		var search = searchURL + '&query=' + movie;
		// console.log(search);

		$.getJSON(search, function(searchMovieData){
			var searchHTML = '';
			for(var i = 0; i < searchMovieData.results.length; i++){
				searchHTML += '<div class="col">';
					searchHTML += '<span>'+searchMovieData.results[i].title+'</span>';
					var posterUrl = imageBaseUrl + 'w300'+ searchMovieData.results[i].poster_path;
					var bigImage = imageBaseUrl + 'w780'+ searchMovieData.results[i].poster_path;
					var overview = searchMovieData.results[i].overview;
						searchHTML += '<span class="overview">'+searchMovieData.results[i].overview+'</span>';
					searchHTML +='<a class="single_image" href="'+bigImage+'"><img src="'+ posterUrl+ '"></a>';
				searchHTML +='</div>';	
			}
			$('.poster-grid').html(searchHTML);
			$(".single_image").fancybox();
		});

	});

});