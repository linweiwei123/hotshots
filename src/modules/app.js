/**
 * Created by Administrator on 2016/10/21.
 */
var angular = require('angular');
var uirouter = require('angular-ui-router');
var oclazylaod = require('oclazyload');

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

var app = angular.module('hotshots',[uirouter,oclazylaod]);

//路由配置
require('./config/router');

//各业务模块
require('./business/home');

