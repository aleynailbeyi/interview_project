'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Positions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			position_name: {
				type: Sequelize.STRING
			},
			team_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Teams',
					key: 'id'
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			is_removed: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Positions');
	}
};