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
			applicant_name: {
				type: Sequelize.STRING
			},
			location: {
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
				references: {
					model: 'InterviewStatuses',
					key: 'id'
				}
			},
			dateAt: {
				type: Sequelize.DATE
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
			},
			send_file: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Files',
					key: 'id'
				}
			}

		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Interviews');
	}
};