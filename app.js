(function(){

	var app = angular.module('store', []);


	app.controller('StoreController', function(){
		this.products = products;
	});
	
	app.controller('TabController', function(){
		this.tab = 1;
		this.setTab = function(setTab){
			this.tab = setTab;
		};

		this.isSet = function(tab){
			return tab===this.tab;
		};

	});

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(current){
			this.current = current || 0;
		};
	});

	// 1. create a new property on our reviews to capture WHEN the review was created.
	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			// 1.1 	We'll put this property in the addReview function to make sure it happens right when 
			// 		the user submits. We can use the Date.now() function to get the current date/time.
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};

			// now go add this to your view.
		};
	});

	var products = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'great Dodeca gem!',
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
