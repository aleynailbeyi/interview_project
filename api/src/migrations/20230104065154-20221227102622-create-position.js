'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('Positions', 'is_removed', { type: Sequelize.BOOLEAN, defaultValue: false });
	},

	async down (queryInterface) {
		await queryInterface.removeColumn('Positions', 'is_removed');
	}
};
