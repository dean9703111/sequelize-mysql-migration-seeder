'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    // 每個使用者有 10 筆訂單（order）
    var orderArray = [];

    for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <= 10; j++) {
        const order = {
          user_id: i,
          total_price: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          updatedAt: new Date()
        };
        orderArray.push(order);
      }
    }

    return queryInterface.bulkInsert('Orders', orderArray);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
