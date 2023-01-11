/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
let tokenUser;
let expect = chai.expect;
const id = 1;

describe('Positions', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('test@gmail.com', 'test');
	});
	it('should create position', (done) => {
		chai.request(app)
			.post('/private/v1/position/createPosition')
			.set('Authorization', tokenUser)
			.send({
				'position_name': 'backend',
				'team_id': 1
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Successfully. Position created.');
				done();
			});
	});
	it('should get positions', (done) => {
		chai.request(app)
			.get('/private/v1/position/getPosition')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Get positions successfully.');
				done();
			});
	});
	it('should delete position', (done) => {
		chai.request(app)
			.delete(`/private/v1/position/deletePosition/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Position deleted');
				done();
			});
	});
	
});