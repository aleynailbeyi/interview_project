'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('InterviewStatuses', [ {
			status_name: 'Mülakat tamamlandı.',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InterviewStatuses', null, {});
  }
};
