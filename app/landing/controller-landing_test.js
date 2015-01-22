require('chai').should();
describe('Landing page',function(){
    'use strict';
   var controller;
    beforeEach(function(){
        var LandingController = require('./controller-landing');
       controller = new LandingController();
    });

    it('Should have a heading saying "Landing"',function(){
        controller.heading.should.equal('Landing');
    });

    it('Should have list of links if heading exist',function(){
        controller.links.should.be.an('array');
    });
});
