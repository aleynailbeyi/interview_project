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
        type: Sequelize.STRING
      },
      team_id: {
        type: Sequelize.INTEGER
      },
      status_id: {
        type: Sequelize.INTEGER
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Interviews');
  }
};