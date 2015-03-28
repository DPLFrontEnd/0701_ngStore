(function(){
	
	var app = angular.module('store-products', []);

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
