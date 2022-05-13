const { sequelize } = require('./models');
const { QueryTypes } = sequelize;

async function rawQueries () {
    console.time('rawQueries')
    const results = await sequelize.query(
        "SELECT users.name, items.price FROM users\
         LEFT JOIN orders ON orders.user_id = users.id\
         LEFT JOIN items ON items.order_id = orders.id\
         WHERE items.price < 50 LIMIT 5"
        , { type: QueryTypes.SELECT }
    );
    console.log(JSON.stringify(results, null, 2));
    console.timeEnd('rawQueries')
}
rawQueries()