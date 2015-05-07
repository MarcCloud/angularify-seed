/**
 * Created by Marco Romero on 1/8/2015.
 */
module.exports=angular.module('spa.home',[])
    .controller('LandingController',[require('./controller-landing')]);
//  .directive('myDirective',['someDep',require('./my-directive')])
//  .service('myService',['someDep',require('./my-service')])
//  .factory('myFactory',['someDep',require('./my-factory')])
//  .filter('myFilter',['someDep',require('./my-filter')])