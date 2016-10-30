/**
 * Created by linww on 2016/10/28.
 */
/**
 * Created by Administrator on 2016/10/21.
 */
angular.module('hotshots.service',[])
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

module.exports = 'hotshots.service';