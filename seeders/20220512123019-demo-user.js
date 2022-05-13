'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // 建立 100 個使用者
    var userArray = [];

    for (let i = 1; i <= 100; i++) {
      const user = {
        name: `DumpUser${i}`,
        mail: `fake${i}@baobao.com`,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      userArray.push(user);
    }

    return queryInterface.bulkInsert('Users', userArray);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
