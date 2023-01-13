'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Interviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userID: {
				type: Sequelize.INTEGER, 
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id'
				}
			},
			applicant_name: {
				type: Sequelize.STRING
			},
			note: {
				type: Sequelize.STRING
			},
			interview_type: {
				type: Sequelize.INTEGER, 
				references: {
					model: 'InterviewTypes',
					key: 'id'
				}
			},
			team_id: {
				type: Sequelize.INTEGER, 
				references: {
					model: 'Teams',
					key: 'id'
				}
			},
			status_id: {
				type: Sequelize.INTEGER, 
				defaultValue: 1,
				allowNull: false,
				references: {
					model: 'InterviewStatuses',
					key: 'id'
				}
			},
			dateAt: {
				type: Sequelize.DATE
			},
			endAt: {
				type: Sequelize.DATE
			},
			is_removed: {
				defaultValue: false,
				allowNull: false,
				type: Sequelize.BOOLEAN
			},
			location_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Locations',
					key: 'id'
				}
			},
			surveyId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Surveys',
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
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Interviews');
	}
};