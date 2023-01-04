'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('Interviews', 'send_file', { type: Sequelize.STRING });
	},

	async down (queryInterface) {
		await queryInterface.removeColumn('Interviews', 'send_file');
	}
};
