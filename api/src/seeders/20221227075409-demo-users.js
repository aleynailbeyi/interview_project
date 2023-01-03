'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		return queryInterface.bulkInsert('Users', [ {
			firstName: 'Aleyna',
			lastName: 'İlbeyi',
			email: 'a@gmail.com',
			password: 'char',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			firstName: 'Burak',
			lastName: 'Yılmazer',
			email: 'burakyilmazer@gmail.com',
			password: '988232',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			firstName: 'Alperen',
			lastName: 'Taşkın',
			email: 'alperentaskin@gmail.com',
			password: '1367454',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
