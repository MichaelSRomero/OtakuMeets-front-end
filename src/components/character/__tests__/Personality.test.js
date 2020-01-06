import React from 'react';
import { shallow } from 'enzyme';
import Personality from '../Personality';

describe('Personality Component', () => {
  let wrapper;
  const props = {
    index: 0,
    currentIndex: 1,
    handleClick: jest.fn(),
    getPersonalityType: jest.fn(),
  };
  const personalityType = { symbol: 'I' };

  beforeAll(() => {
    props.getPersonalityType.mockReturnValue(personalityType);
    wrapper = shallow(
      <Personality
        index={props.index}
        currentIndex={props.currentIndex}
        handleClick={props.handleClick}
        getPersonalityType={props.getPersonalityType}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "personality-symbol"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('personality-symbol')).toEqual(true);
    });

    it('should invoke "getPersonalityType" method', () => {
      expect(props.getPersonalityType.mock.calls.length).toEqual(1);
    });
  });

  describe('when clicked', () => {
    it('should invoke "handleClick" method', () => {
      wrapper.simulate('click');
      expect(props.handleClick.mock.calls.length).toEqual(1);
    });
  });
});
