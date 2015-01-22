/**
 * Created by Marco Romero on 1/9/2015.
 */
require('chai').should();
describe('Todos page',function(){
    'use strict';
    var controller;
    beforeEach(function(){
        var TodosController = require('./controller-todos');
        controller = new TodosController();
    });

    it('Should have a heading saying "Todos"',function(){
        controller.heading.should.equal('Todos');
    });
});