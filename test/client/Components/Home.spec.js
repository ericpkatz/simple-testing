import React from 'react';
import Home from '../../../src/Components/Home';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter()});

describe('Home', ()=> {
  describe('default rendering', ()=> {
    let home;
    beforeEach(()=> {
      home = shallow(<Home />);
    });
    it('default rendering', ()=> {
      expect(home.html()).contains('hi');
    });
  });
  describe('passing message', ()=> {
    let home;
    const message = 'foo';
    beforeEach(()=> {
      home = shallow(<Home message = { message }/>);
    });
    it('shows message', ()=> {
      expect(home.html()).contains(message);
    });
  });
});


