What is it?
---
Movie site using HTML, CSS (via SASS), jQuery, the MovieDB API and the FancyBox API to display now playing movies and their summaries. 

Live Demo
---
[Live demo](http://pn-movie-app.surge.sh/)

Languages Used
---
  * HTML
  * CSS / SASS
  * jQuery
  * The Movie Database API
  * FancyBox API

Github Link
---
[Github](https://github.com/paigen11/movie-app)

Authors
---
Paige Niedringhaus

Screenshots
---
The home page users see when the site starts up of the movies playing in theaters now
![alt text]()

Movie synopses provided when users mouse over the movie poster
![alt text]()

When users search a keyword, all movies with that keyword in the title are displayed
![alt text]()

When users click on a movie poster, it pops out in an enlarged FancyBox modal
![alt text]()

Further Info
---
When users first come to the site, the movies playing in theaters now are displayed via a jQuery JSON call to the TMDb API.

As they mouse over the movie posters, they can see the synopsis of each movie. Users can also search for other movies via the search bar, and display larger posters of each movie in a pop out modal by clicking on the movie poster.

Requirements
---
A TMDb user account is required for an API key to The Movie Database, which can be obtained [here](https://www.themoviedb.org/documentation/api).

The FancyBox API is needed for the enlargement of the movie posters. Documentation for FancyBox is [here](http://fancybox.net/api).

Code Examples
---
jQuery code making the JSON call to the TMDb API and returning the results to the user in the form of movie posters, complete with titles and synopses

```javascript
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
```
