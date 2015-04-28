/**
 * Created by Marco Romero on 1/8/2015.
 */
'use strict';
    angular
        .module('spa',['ui.router',
                      'ui.bootstrap',
                      require('./landing').name,
                      require('./todos').name])
        .config(['$stateProvider',
                 '$urlRouterProvider',
                 require('./routes')]);