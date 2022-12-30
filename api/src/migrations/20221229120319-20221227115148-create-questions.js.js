'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Questions',
      'type_id',
     Sequelize.INTEGER
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Questions',
      'type_id',
     Sequelize.INTEGER
    );
  }
};
