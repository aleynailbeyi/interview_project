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
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				}
			},
			name_id: {
				type: Sequelize.INTEGER
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
			}
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Questions');
	}
};