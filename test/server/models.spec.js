const chai = require('chai');
const { expect } = chai;
const db = require('../../db');

describe('models', ()=> {
  let seeded;
  beforeEach(()=> {
    return db.sync() 
      .then(()=> db.seed())
      .then( _seeded => seeded = _seeded);

  });
  describe('seeded data', ()=> {
    it('has foo', ()=> {
      expect(seeded.products.some(product => product.name === 'foo')).to.be.true;
    });
  });
});
