/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
//require('./productlist.service.js');

module.exports = angular.module('hotshots.productlist',[])
    .controller('ProductListController',function ($scope,productService,$stateParams) {
        console.log($stateParams.type);
        $scope.list = ['macbook'];
        $scope.products = [{},{},{},{},{},{},{},{},{}];
        //  productService.getProduct(function(data,status,headers,config){
        //     console.log(data);
        //      $scope.list = data;
        // });
    });
