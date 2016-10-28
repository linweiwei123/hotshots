/**
 * Created by Administrator on 2016/10/28.
 */
"use strict";
//home页主中型轮播图
angular.module("hotshots.htswiper", []).directive("htMainSwiper", function () {
    return {
        restrict: "E"
        , replace: "true"
        , transclude: true
        , template: require('./htswiper.html')
        , controller: function ($scope) {
            $scope.activeArray = [1, 0, 0];
            $scope.minusClick = function () {
                if ($scope.activeArray[0] == 1) {
                    $scope.activeArray.shift();
                    $scope.activeArray.push(1);
                }
                else {
                    $scope.activeArray.shift();
                    $scope.activeArray.push(0);
                }
                console.log($scope.activeArray);
            }
            $scope.addClick = function () {
                if ($scope.activeArray[2] == 1) {
                    $scope.activeArray.pop();
                    $scope.activeArray.unshift(1);
                }
                else {
                    $scope.activeArray.pop();
                    $scope.activeArray.unshift(0);
                }
                console.log($scope.activeArray);
            }
        }
        , link: function (scope, element, attrs) {
            // console.log(element[0].querySelector(""));
        }
    }
}).directive("htLargeSwiper", function () { //home页大型轮播图
    return {
        restrict: "E"
        , replace: "true"
        , transclude: true
        , template: require('./largeswiper.html')
        , controller: function ($scope) {
        }
        , link: function (scope, element, attrs) {
            // console.log(element[0].querySelector(""));
        }
    }
});