'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.bulkInsert('activities', [{      
        "id": 2,
        "email": "ad0286a7-bec4-405c-96e2-cd472c18a1e7@skyshi.com",
        "title": "coba 4",
        "created_at": "2021-11-30",
        "updated_at": "2021-11-30",
        "deleted_at": null    
    }])
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('activities', null, {}); 
  }
} 


