// 1.1 We'll wrap our new module in another anonymous function to give it its own scope.
(function(){
	
	// 1.2 Here we'll add a new Angular module (we can use the 'app' variable again, because
	// 		we're in a different scope. ). We'll also give this module a name of 'store-products'
	// 		though, you can name it something else if you want.

	var app = angular.module('store-products', []);


	// 1.3	And we'll paste our product directives here.
	// 1.4	Before we move on, we need to add this file to our HTML page and add it as
	// 		a DEPENDENCY to our store module in app.js.

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(current){
			this.current = current || 0;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html',
		};
	});


	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		}; 
	});

	app.directive("productSpecs", function() {
		return {
			restrict: 'A',
			templateUrl: "product-specs.html"
		};
	});

	app.directive("productReviews", function() {
		return {
			restrict: 'E',
			templateUrl: "product-reviews.html"
		};
	});	

	app.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function(){
				this.tab = 1;

				this.isSet = function(checkTab) {
				return this.tab === checkTab;
				};

				this.setTab = function(setTab) {
				this.tab = setTab;
				};
			},
			controllerAs: 'tab'
		};
	});	

})();

