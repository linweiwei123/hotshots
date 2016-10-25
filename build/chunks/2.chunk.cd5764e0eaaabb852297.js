webpackJsonp([2],{

/***/ 18:
/*!********************************************************************!*\
  !*** ./src/modules/business/productlist/productlist.home.controller.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/10/21.
	 */
	'use strict';
	__webpack_require__(/*! ./productlist.service */ 19);
	module.exports = angular.module('hotshots.productlist')
	    .controller('productListController',function ($scope,productService) {
	        $scope.list = ['macbook'];
	        //  productService.getProduct(function(data,status,headers,config){
	        //     console.log(data);
	        //      $scope.list = data;
	        // });
	    });


/***/ },

/***/ 19:
/*!*****************************************************************!*\
  !*** ./src/modules/business/productlist/productlist.service.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 2016/10/21.
	 */
	angular.module('hotshots.productlist',[])
	    .factory('productService',function ($http) {
	        return {
	           getProduct: function getProduct(callback){
	            return $http({
	                method:'GET',
	                url:'http://localhost:8081/hotshots/product'
	            }).success(callback);
	        }
	        }
	
	    })
	
	module.exports = 'app.productservice';

/***/ }

});
//# sourceMappingURL=2.chunk.cd5764e0eaaabb852297.js.map