'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert('Locations', [ {
			name: 'Online',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Office',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Locations', null, {});
	}
};
