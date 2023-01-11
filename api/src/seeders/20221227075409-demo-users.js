'use strict';

const md5 = require('md5');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		return queryInterface.bulkInsert('Users', [ {
			firstName: 'Aleyna',
			lastName: 'İlbeyi',
			email: 'a@gmail.com',
			password: md5('char'),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			firstName: 'Burak',
			lastName: 'Yılmazer',
			email: 'burak@gmail.com',
			password: 'adafass',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			firstName: 'Buğra',
			lastName: 'Okyay',
			email: 'bugra@gmail.com',
			password: 'char',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
