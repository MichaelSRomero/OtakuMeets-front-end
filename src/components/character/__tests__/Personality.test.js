import React from 'react';
import { shallow } from 'enzyme';
import Personality from '../Personality';

describe('React unit tests', () => {
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

    it('Renders a <div> tag with className "personality-symbol"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('personality-symbol')).toEqual(true);
    });

    it('Invokes "getPersonalityType" upon render', () => {
      expect(props.getPersonalityType.mock.calls.length).toEqual(1);
    });

    it('Invokes "handleClick" when <div> gets clicked', () => {
      wrapper.simulate('click');
      expect(props.handleClick.mock.calls.length).toEqual(1);
    });
  });
});
