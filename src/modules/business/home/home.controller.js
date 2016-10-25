/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
//require('./productlist.service');
require('../../../asserts/css/swiper.min.css');
require('../../../asserts/js/swiper.min.js');
require('angular-swiper');
module.exports = angular.module('hotshots.home',['ksSwiper'])
    .controller('HomeController',function ($scope) {
        $scope.list = ['macbook'];
        //  productService.getProduct(function(data,status,headers,config){
        //     console.log(data);
        //      $scope.list = data;
        // });

        $scope.swiper = {};

        $scope.next = function(){
            $scope.swiper.slideNext();
        };

    });
