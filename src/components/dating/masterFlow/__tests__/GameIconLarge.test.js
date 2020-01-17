import React from 'react';
import { shallow } from 'enzyme';
import GameIconLarge from '../GameIconLarge';

describe('GameIconLarge Component', () => {
  let wrapper;
  const props = {
    handleClick: jest.fn(),
    img: 'fakeimage.com',
  };

  beforeAll(() => {
    wrapper = shallow(
      <GameIconLarge
        handleClick={props.handleClick}
      />,
    );
  });

  describe('when recieving props', () => {
    it('should check the type of handleClick', () => {

    });
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "game-icon-outer-large"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('game-icon-outer-large')).toEqual(true);
    });
  });

  describe('when clicked', () => {
    it('should invoke handleClick method', () => {
      const iconDiv = wrapper.find('.game-icon-large');
      iconDiv.simulate('click');
      expect(props.handleClick.mock.calls.length).toEqual(1);
    });
  });
});
