'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert('NewInterviewStatuses', [ {
			status_name: 'Mülakat hazırlanıyor.',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			status_name: 'Mülakat onaylandı.',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			status_name: 'Mülakat reddedildi.',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('NewInterviewStatuses', null, {});
	}
};