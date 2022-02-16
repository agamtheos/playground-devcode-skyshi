'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false,
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      }
  });

  },

  async down (queryInterface, Sequelize) {  
    await queryInterface.dropTable('activites');    
  }
};
