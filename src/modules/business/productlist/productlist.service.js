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