/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
require('./productlist.service');
module.exports = angular.module('hotshots.productlist')
    .controller('productListController',function ($scope,productService) {
        $scope.list = ['macbook'];
        //  productService.getProduct(function(data,status,headers,config){
        //     console.log(data);
        //      $scope.list = data;
        // });
    });
