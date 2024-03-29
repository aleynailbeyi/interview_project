'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Answers', {
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
			text: {
				type: Sequelize.STRING
			},
			surveyID: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Surveys',
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
		await queryInterface.dropTable('Answers');
	}
};