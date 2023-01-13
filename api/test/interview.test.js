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
/*
 * let file = {
 * 	'files': [
 * 		'Aleyna_I_lbeyi_Resume.pdf'
 * 	]
 * };
 */

let files = [
	'/Users/aleynailbeyi/Downloads/Aleyna_I_lbeyi_Resume.pdf'
];

let data =  {
	'applicant_name': 'Aysima İlbeyi',
	'userID': 3,
	'note': 'abcde',
	'interview_type': 1,
	'team_id': 2,
	'status_id': 1,
	'dateAt': '2023-03-05 10:22',
	'endAt': '2023-03-05 10:52',
	'location_id': 1,
	'surveyId': 1
};

describe('Interviews', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('aleyna@gmail.com', '123456');
	});
	// eslint-disable-next-line no-loop-func
	it(`file ${files} should pass`, (done) => {
		let postAgent = chai.request(app)
			.post('/private/v1/interview/createInterview')
			.set('Authorization', tokenUser)
			.set('content-type', 'multipart/form-data');
		files.forEach(element => {
			postAgent = postAgent.attach('files', element);
		});
		postAgent.field(data)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('Interview created.');
				res.body.should.have.property('type').eql(true);
				done();
			});

		/*
		 * chai.request(app)
		 * 	.post('/private/v1/interview/createInterview')
		 * 	.set('Authorization', tokenUser)
		 * 	.attach('files', file)
		 * 	.send({data})
		 * 	.end((err, res) => {
		 * 		if (err) {
		 * 			done(err);
		 * 		}
		 * 		res.body.should.have.property('message').eql('Interview created.');
		 * 		res.body.should.have.property('type').eql(true);
		 * 		done();
		 * 	});
		 */
		
	});
	it('should get all interviews', (done) => {
		chai.request(app)
			.get('/private/v1/interview/getAllInterview')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Interviews listed');
				done();
			});
	});
	it('should get all interviews', (done) => {
		chai.request(app)
			.get(`/private/v1/interview/getInterviewById/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(false);
				res.body.should.have.property('message').eql('Not found interview this id.');
				done();
			});
	});
	it('should complete interview', (done) => {
		chai.request(app)
			.put('/private/v1/interview/completeInterview/1')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Mülakat tamamlandı');
				done();
			});
	});
	it('should delete interview', (done) => {
		chai.request(app)
			.delete(`/private/v1/interview/deleteInterview/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(false);
				res.body.should.have.property('message').eql('Interview didnt found');
				done();
			});
	});
	
});