/**
 * Created by Marco Romero on 1/8/2015.
 */
'use strict';
    require('./core-dependencies');
var app = angular.module('spa',['ui.router','ui.bootstrap']);
    require('./landing');
    require('./todos');

    app.config(['$stateProvider','$urlRouterProvider',require('./routes')]);