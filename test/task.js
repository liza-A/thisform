let chai = require('chai');
let chaiHttp = require('chai-http');
let mongoose = require("mongoose");
let Form = require('../app/models/form');
// const { response } = require('express');
let server = require('../index');

let should = chai.should();

chai.use('chaiHttp');
//Our parent block
describe('Forms', () => {
    beforeEach((done) => { //Before each test we empty the database
        Form.remove({}, (err) => { 
           done();           
        });        
    });
});    
//get task
describe('/GET form', () => {
    it('should get tasks',(done) => {
        chai.request(server)
        .get('/task')
        .end((err,response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(8)
        done();   
        })
    })
})