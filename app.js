(function(){

	// 3.1	We'll add the new 'store-products' module to our app. DEPENDENCIES are INJECTED
	// 		by including their name in the dependency array (next to the module name).
	// 
	var app = angular.module('store', ['store-products']);

	// 3.2	Now you should be able to refresh and see everything working just like it was before.
	// 		Only this time, you're using two seperate modules.

	app.controller('StoreController', function(){
		this.products = products;
	});


	// 1.0 	This file is starting to get too long to manage. We're going to break 
	// 		it up by moving our Product directives into a new MODULE.
	// 		Create a new file called 'products.js' and copy these directives over there.
	
	// app.directive('productTitle', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'product-title.html',
	// 	};
	// });
	
	// app.controller('GalleryController', function(){
	// 	this.current = 0;
	// 	this.setCurrent = function(current){
	// 		this.current = current || 0;
	// 	};
	// });

	// app.controller('ReviewController', function(){
	// 	this.review = {};

	// 	this.addReview = function(product){
	// 		this.review.createdOn = Date.now();
	// 		product.reviews.push(this.review);
	// 		this.review = {};
	// 	};
	// });
	
	// app.directive('productDescription', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'product-description.html'
	// 	}; 
	// });

	// app.directive("productSpecs", function() {
	// 	return {
	// 		restrict: 'A',
	// 		templateUrl: "product-specs.html"
	// 	};
	// });

	// app.directive("productReviews", function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: "product-reviews.html"
	// 	};
	// });

	// app.directive('productTabs', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'product-tabs.html',
	// 		controller: function(){
	// 			this.tab = 1;

	// 			this.isSet = function(checkTab) {
	// 			return this.tab === checkTab;
	// 			};

	// 			this.setTab = function(setTab) {
	// 			this.tab = setTab;
	// 			};
	// 		},
	// 		controllerAs: 'tab'
	// 	};
	// });


	var products = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'great Dodeca gem!',
			// New specs
			shine: 9,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			//
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}],
			canPurchase: true, 
			soldOut: false,
		},{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'great Pentagonal gem!',
			// New specs
			shine: 9,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			//
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837
			}],
			canPurchase: false, 
			soldOut: false,
		},{
			name: 'Diamond',
			price: 10.95,
			description: 'great Diamond gem!',
			// New specs
			shine: 9,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			//
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			reviews: [{
				stars: 1,
				body: "This gem is WAY too expensive for its rarity value.",
				author: "turtleguyy@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "BBW: High Shine != High Quality.",
				author: "LouisW407@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}],
			canPurchase: true, 
			soldOut: false,
		}
		];

})();
