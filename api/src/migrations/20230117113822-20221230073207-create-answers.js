'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface) {
		return queryInterface.removeColumn(
			'Answers',
			'surveyID'
		);

	},

	async down (queryInterface) {
		return queryInterface.addColumn(
			'Answers',
			'surveyID'
		);
	}
};
