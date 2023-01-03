'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert('InterviewStatuses', [ {
			status_name: 'Mülakat hazırlanıyor.',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status_name: 'Mülakat tamamlandı.',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status_name: 'Mülakat silindi.',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('InterviewStatuses', null, {});
	}
};
