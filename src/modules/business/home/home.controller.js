/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
//require('./productlist.service');

module.exports = angular.module('hotshots.home',[])
    .controller('HomeController',function ($scope) {
        $scope.list = ['macbook'];
        $scope.products = [{},{},{},{},{},{},{}];
    });
