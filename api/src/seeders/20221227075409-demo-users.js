'use strict';

const md5 = require('md5');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		return queryInterface.bulkInsert('Users', [ {
			firstName: 'Aleyna',
			lastName: 'İlbeyi',
			email: 'aleyna@gmail.com',
			password: md5('123456'),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			firstName: 'Burak',
			lastName: 'Yılmazer',
			email: 'burak@gmail.com',
			password: md5('burak'),
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
