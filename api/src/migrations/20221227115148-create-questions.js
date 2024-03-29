'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			text: {
				type: Sequelize.STRING
			},
			type_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'QuestionTypes',
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
			},
			survey_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Surveys',
					key: 'id'
				}
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Questions');
	}
};