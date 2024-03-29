'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert('InterviewTypes', [ {
			name: 'HR Interview',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Technical Interview',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete('InterviewTypes', null, {});
	}
};
