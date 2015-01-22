/**
 * Created by Marco Romero on 1/8/2015.
 */
'use strict';
var angular= require('angular');
    require('ui-route');
    require('angular-bootstrap');
var app = angular.module('spa',['ui.router','ui.bootstrap']);
    require('./landing');
    require('./todos');

    app.config(['$stateProvider','$urlRouterProvider',require('./routes')]);