(function(){

	var app = angular.module('store', ['store-products',]);


	// 1.2	the '$http' Service let's us make an asynchronous (AJAX) request to a remote server. 
	// 		We can use a GET request to get our JSON file. But first we have to tell our controller that
	// 		We want to use $http by including it in a dependency array.
	// 		Note: the dependency array of a controller wraps around the controller's function param and
	// 		then the dependency is added as a argument to the function itself.
	app.controller('StoreController', ['$http', function( $http ){
			// 1.3	the $http service was just passed into this function. Now we have access to it in here.
			// 		this.products = products; // <---- Our JSON data should replace 'products'.

			var store = this; 
			// 1.5	When the page first loads, the products property doesn't exist yet (it gets set after the 
			// 		data is fetched from the JSON file or API). Let's also create an initial products array, 
			// 		so we don't get an 'undefined' error when the page first loads.
			store.products = [];

			$http.get('products.json').success(function(data){
				// 1.4	We can't use 'this.products' inside here because 'this' is now the success() 
				// function (not the 'this' from our StoreController). So we should save 'this' from the 
				// StoreController in a variable so we can access it. 
				store.products = data;
			});

		} ]);


	// 1.1	Having our data stored in a var isn't very 'application-like'. Let's use a SERVICE to pull
	//		this data from a JSON file (or other API). Then we could potentially change where we're 
	// 		pulling the data from at any time, and our application would still work (assuming the data
	// 		is formatted the same).



	
	// var products = [
	// 	{
	// 		name: 'Dodecahedron',
	// 		price: 2,
	// 		description: 'great Dodeca gem!',
	// 		// New specs
	// 		shine: 9,
	// 		rarity: 6,
	// 		color: '#EEE',
	// 		faces: 12,
	// 		//
	// 		images:[{
	// 			full: 'http://placekitten.com/g/300/300',
	// 			thumb: 'http://placekitten.com/g/300/300'
	// 		},{
	// 			full: 'http://placekitten.com/g/302',
	// 			thumb: 'http://placekitten.com/g/302'
	// 		},{
	// 			full: 'http://placekitten.com/g/304',
	// 			thumb: 'http://placekitten.com/g/304'
	// 		}],
	// 		reviews: [{
	// 			stars: 5,
	// 			body: "I love this gem!",
	// 			author: "joe@example.org",
	// 			createdOn: 1397490980837
	// 		}, {
	// 			stars: 1,
	// 			body: "This gem sucks.",
	// 			author: "tim@example.org",
	// 			createdOn: 1397490980837
	// 		}],
	// 		canPurchase: true, 
	// 		soldOut: false,
	// 	},{
	// 		name: 'Pentagonal Gem',
	// 		price: 5.95,
	// 		description: 'great Pentagonal gem!',
	// 		// New specs
	// 		shine: 9,
	// 		rarity: 6,
	// 		color: '#EEE',
	// 		faces: 12,
	// 		//
	// 		images:[{
	// 			full: 'http://placekitten.com/g/300/300',
	// 			thumb: 'http://placekitten.com/g/300/300'
	// 		},{
	// 			full: 'http://placekitten.com/g/302',
	// 			thumb: 'http://placekitten.com/g/302'
	// 		},{
	// 			full: 'http://placekitten.com/g/304',
	// 			thumb: 'http://placekitten.com/g/304'
	// 		}],
	// 		reviews: [{
	// 			stars: 3,
	// 			body: "I think this gem was just OK, could honestly use more shine, IMO.",
	// 			author: "JimmyDean@example.org",
	// 			createdOn: 1397490980837
	// 		}, {
	// 			stars: 4,
	// 			body: "Any gem with 12 faces is for me!",
	// 			author: "gemsRock@example.org",
	// 			createdOn: 1397490980837
	// 		}],
	// 		canPurchase: false, 
	// 		soldOut: false,
	// 	},{
	// 		name: 'Diamond',
	// 		price: 10.95,
	// 		description: 'great Diamond gem!',
	// 		// New specs
	// 		shine: 9,
	// 		rarity: 6,
	// 		color: '#EEE',
	// 		faces: 12,
	// 		//
	// 		images:[{
	// 			full: 'http://placekitten.com/g/300/300',
	// 			thumb: 'http://placekitten.com/g/300/300'
	// 		},{
	// 			full: 'http://placekitten.com/g/302',
	// 			thumb: 'http://placekitten.com/g/302'
	// 		},{
	// 			full: 'http://placekitten.com/g/304',
	// 			thumb: 'http://placekitten.com/g/304'
	// 		}],
	// 		reviews: [{
	// 			stars: 1,
	// 			body: "This gem is WAY too expensive for its rarity value.",
	// 			author: "turtleguyy@example.org",
	// 			createdOn: 1397490980837
	// 		}, {
	// 			stars: 1,
	// 			body: "BBW: High Shine != High Quality.",
	// 			author: "LouisW407@example.org",
	// 			createdOn: 1397490980837
	// 		}, {
	// 			stars: 1,
	// 			body: "Don't waste your rubles!",
	// 			author: "nat@example.org",
	// 			createdOn: 1397490980837
	// 		}],
	// 		canPurchase: true, 
	// 		soldOut: false,
	// 	}
	// 	];

})();
