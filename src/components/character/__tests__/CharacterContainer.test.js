import React from 'react';
import { shallow } from 'enzyme';
import { CharacterContainer } from '../CharacterContainer';

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
      traits: {
        extraversion: {
          title: 'extraversion',
          symbol: 'E',
        },
        introversion: {
          title: 'introversion',
          symbol: 'I',
        },
        sensing: {
          title: 'sensing',
          symbol: 'S',
        },
        intuition: {
          title: 'intuition',
          symbol: 'N',
        },
        thinking: {
          title: 'thinking',
          symbol: 'T',
        },
        feeling: {
          title: 'feeling',
          symbol: 'F',
        },
        judging: {
          title: 'judging',
          symbol: 'J',
        },
        perceiving: {
          title: 'perceiving',
          symbol: 'P',
        },
      },
      token: 'abc123',
      history: {
        push: jest.fn(),
      },
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
      const divContainer = wrapper.find('div').first();
      expect(divContainer.type()).toEqual('div');
      expect(divContainer.hasClass('character-container')).toEqual(true);
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
