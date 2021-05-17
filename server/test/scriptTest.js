process.env.NODE_ENV = "test";
const assert = require('chai').assert;
const script = require('../script');
var request = require('supertest');
const User = require('../models/users').User;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../script');
const should = chai.should();

chai.use(chaiHttp)



describe('/GET users', () => {
    it('it should Get user', (done) => {
        chai.request(app)
        .get('/auth/login')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();

        });
    });
});


describe('/POST user', () => {
    it('it should post the user info', (done) => {
        const user = {
            userID: 1,
            username: "mihir",
            password: "mihir",
            email: "mihir@gmail.com"
        };

        chai.request(app)
        .post('/auth/login')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.should.have.property('message');
            res.body.should.have.property('statusType').eq('success');
            done();
        });
    });
});
