'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('NewInterviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			int_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Interviews',
					key: 'id'
				}
			},
			int_req: {
				type: Sequelize.STRING
			},
			is_removed: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('NewInterviews');
	}
};