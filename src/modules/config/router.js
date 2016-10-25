/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
var angular = require('angular');

angular.module('hotshots').config(function($stateProvider,$urlRouterProvider){

    //默认state1
    $urlRouterProvider.otherwise("/productlist");
    
    var homeState = {
        state:'home',
        config:{
            url:'/home',
            templateProvider:function($q){
                return $q(function(resolve){
                    require.ensure([],function(){
                        resolve(require('../business/home/home.html'));
                    });
                })
            },
            controller:'HomeController',
            resolve:{
                'hotshots.home': function($q, $ocLazyLoad){
                    return $q(function(resolve){
                        require.ensure(['../business/home/home.controller'],function(){
                            var ctrl = require('../business/home/home.controller');
                            $ocLazyLoad.load({
                                name:'hotshots.home'
                            });
                            resolve(ctrl);
                        })
                    })
                }
            }
        }
    }
    var productlistRouter = {
        state:'productlist',
        config:{
            url:'/productlist',
            templateProvider: function($q){
                return $q(function(resolve){
                    require.ensure([],function(){
                        resolve(require('../business/productlist/productList.html'));
                    });
                });
            },
            controller: 'ProductListController',
            resolve:{
                'hotshots.productlist': function($q, $ocLazyLoad){
                    return $q(function(resolve){
                        require.ensure(['../business/productlist/productlist.controller'],function(){
                            var ctrl = require('../business/productlist/productlist.controller');
                            $ocLazyLoad.load({
                                name:'hotshots.productlist'
                            });
                            resolve(ctrl);
                        })
                    })
                }
            }
        }
    }


    $stateProvider.state(homeState.state,homeState.config);
    $stateProvider.state(productlistRouter.state,productlistRouter.config);
});