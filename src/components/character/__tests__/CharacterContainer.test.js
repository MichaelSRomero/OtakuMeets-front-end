import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from '../CharacterContainer';

describe('React unit tests', () => {
  describe('CharacterContainer Component', () => {
    let wrapper;
    const props = {
      character: {
        english_name: 'Naruto',
        japanese_name: 'Naruto',
        gender: 'Male',
        alias: 'Gutsy Ninja',
        show: 'Naruto',
        personality: 'ESFP',
        avatar_urls: [],
      },
      traits: {},
      token: 'abc123',
      history: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(
        <CharacterContainer
          character={props.character}
          traits={props.traits}
          token={props.token}
          history={props.history}
        />,
      );
    });

    it('Renders a <div> tag with className "character-container"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('character-container')).toEqual(true);
    });

    // it('Invokes "getPersonalityType" upon render', () => {
    //   expect(props.getPersonalityType.mock.calls.length).toEqual(1);
    // });

    // it('Invokes "handleClick" when <div> gets clicked', () => {
    //   wrapper.simulate('click');
    //   expect(props.handleClick.mock.calls.length).toEqual(1);
    // });
  });
});
