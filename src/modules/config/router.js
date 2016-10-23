/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
var angular = require('angular');

angular.module('hotshots').config(function($stateProvider,$urlRouterProvider){

    //默认state1
    $urlRouterProvider.otherwise("/productlist");
    
    var homeState = {
        name:'home',
        url:'/home',
        template:'<h3>home page</h3>'
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
            controller: 'productListController',
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

    $stateProvider.state(homeState);
    $stateProvider.state(productlistRouter.state,productlistRouter.config);
});