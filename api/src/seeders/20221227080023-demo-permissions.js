'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert('Permissions', [ {
			permission: 'Create Interview',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create User',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Question',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Team',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Create Position',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Get All Interview',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Get Interview By Id',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('Permissions', null, {});
	}
};
