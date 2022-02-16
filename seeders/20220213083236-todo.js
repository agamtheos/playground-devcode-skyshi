'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [{      
      "id": 1,
      "activity_group_id": "2",
      "title": "item1",
      "is_active": "1",
      "priority": "very-high",
      "created_at": "2021-11-30",
      "updated_at": "2021-11-30",
      "deleted_at": null  
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
