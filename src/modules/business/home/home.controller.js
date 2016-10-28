/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
//require('./productlist.service');
require('../../../asserts/css/swiper.min.css');
require('../../../asserts/js/swiper.min.js');
require('angular-swiper');
require('../../directives/swiper.directive.js');
module.exports = angular.module('hotshots.home',['ksSwiper','hotshots.htswiper'])
    .controller('HomeController',function ($scope) {
        $scope.list = ['macbook'];
        $scope.products = [{},{},{},{},{},{},{}];
    });
