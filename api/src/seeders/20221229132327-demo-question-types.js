'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('QuestionTypes', [ {
			name: 'Check Button',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Radio Button',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Text',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuestionTypes', null, {});
  }
};
