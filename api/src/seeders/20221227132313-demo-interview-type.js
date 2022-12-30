'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InterviewTypes', null, {});
  }
};
