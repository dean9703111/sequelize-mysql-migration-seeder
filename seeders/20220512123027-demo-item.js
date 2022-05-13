'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // 每筆訂單下面有 10 個貨物（item）
    var itemArray = [];

    for (let i = 1; i <= 1000; i++) {
      for (let j = 1; j <= 10; j++) {
        const item = {
          order_id: i,
          price: Math.floor(Math.random() * 400),
          createdAt: new Date(),
          updatedAt: new Date()
        };
        itemArray.push(item);
      }
    }

    return queryInterface.bulkInsert('Items', itemArray);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
