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
			interview_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Interviews',
					key: 'id'
				}
			},
			interview_req: {
				type: Sequelize.STRING
			},
			status_id: {
				allowNull: false,
				defaultValue: 1,
				type: Sequelize.INTEGER,
				references: {
					model: 'NewInterviewStatuses',
					key: 'id'
				}
			},
			is_removed: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false
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