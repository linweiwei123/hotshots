/**
 * Created by Administrator on 2016/10/21.
 */
var angular = require('angular');
var uirouter = require('angular-ui-router');
var oclazylaod = require('oclazyload');
var $ = require('jquery');
//css引用
require('../asserts/css/slick.css');
require('../asserts/css/swiper.min.css');
require('../asserts/css/bootstrap.min.css');
require('../asserts/css/magnific-popup.css');
require('../asserts/css/style.css');
require('../asserts/css/megamenu.css');
require('../asserts/css/tools.css');
require('../asserts/css/animate.css');
require('../asserts/css/hotshots.css');
require('../asserts/css/font-icomoon.css');

require('../asserts/css/swiper.min.css');
require('../asserts/js/swiper.min.js');
require('angular-swiper');
require('./directives/swiper.directive.js');
require('./service/services');
var app = angular.module('hotshots',[uirouter,oclazylaod,'ksSwiper','hotshots.htswiper','hotshots.service']);
app.run(function($rootScope){

    //页面资源下载完毕，遮罩取消
    $(document).ready(function(){
        $("#loader-wrapper").hide();
    });

    //router改变开始
    $rootScope.$on('$stateChangeStart', function() {
        console.log("run change router start");
    });
    // router 页面渲染完成之后
    $rootScope.$on('$stateChangeSuccess', function() {
        console.log("run change router end");
    });


});
//路由配置
require('./config/router');

//page loader页面加载loading样式
app.directive('htPageLoad',['$rootScope',function($rootScope){
    return {
        link:function(scope,element,attrs){
            element.addClass('hide'); // hide loading bar by default
            $rootScope.$on('$stateChangeStart', function() {
                element.removeClass('hide'); // show spinner bar
            });
            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
            });
        }
    }
}])




