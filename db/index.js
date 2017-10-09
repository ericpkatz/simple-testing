const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db');

const Product = conn.define('product', {
  name: {
    type: conn.Sequelize.STRING
  }
});

const sync = ()=> {
  return conn.sync( { force: true } );
};

const seed = ()=> {
  return Promise.all([
    Product.create({ name: 'foo'}),
    Product.create({ name: 'bar' }),
    Product.create({ name: 'bazz'}),
  ])
  .then( products => {
    return {
      products
    };
  });
};

module.exports = {
  sync,
  seed,
  models: {
    Product
  }
};
