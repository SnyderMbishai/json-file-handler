var should = require('should');
var assert = require('assert');
var request = require('supertest');
var app = require('../users');

describe('Users', function(){
    describe('Fetch users', function(){
        request(app)
            .get('/users')
            .expect(200, good)
    });
});
