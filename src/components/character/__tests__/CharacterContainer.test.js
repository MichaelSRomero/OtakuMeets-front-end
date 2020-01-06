import React from 'react';
import { shallow } from 'enzyme';
import { CharacterContainer } from '../CharacterContainer';

describe('CharacterContainer Component', () => {
  let wrapper;
  let characterContainerWrapper;
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
      extraversion: { title: 'extraversion', symbol: 'E', description: '...' },
      introversion: { title: 'introversion', symbol: 'I' },
      sensing: { title: 'sensing', symbol: 'S' },
      intuition: { title: 'intuition', symbol: 'N' },
      thinking: { title: 'thinking', symbol: 'T' },
      feeling: { title: 'feeling', symbol: 'F' },
      judging: { title: 'judging', symbol: 'J' },
      perceiving: { title: 'perceiving', symbol: 'P' },
    },
    token: 'abc123',
    history: { push: jest.fn() },
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
    characterContainerWrapper = wrapper.find('div').first();
  });

  describe('when initialized', () => {
    describe('when token exist', () => {

      it('should render a <div> tag with className "character-container"', () => {
        expect(characterContainerWrapper.type()).toEqual('div');
        expect(characterContainerWrapper.hasClass('character-container')).toEqual(true);
      });

      it('should display a <span> tag with character\'s name', () => {
        const characterNameDiv = characterContainerWrapper.find('.character-name');
        expect(characterNameDiv.children().first().type()).toEqual('span');
        expect(characterNameDiv.children().first().text()).toEqual('Naruto');
      });

      it('should render 4 Personality Components', () => {
        const personalityHeaderDiv = characterContainerWrapper.find('.personality-header');
        expect(personalityHeaderDiv.children()).toHaveLength(4);
      });

      it('should display a <div> tag with a trait', () => {
        const personalityTraitDiv = characterContainerWrapper.find('.personality-trait');
        expect(personalityTraitDiv.type()).toEqual('div');
        expect(personalityTraitDiv.text()).toEqual('EXTRAVERSION');
      });

      it('should display a <p> tag with a trait\'s description', () => {
        const traitInfoDiv = characterContainerWrapper.find('.trait-info');
        expect(traitInfoDiv.find('p').type()).toEqual('p');
        expect(traitInfoDiv.find('p').text()).toEqual('...');
      });
    });

    describe('when token does not exist', () => {
      beforeAll(() => {
        wrapper.setProps({ token: '' });
      });

      it('should invoke "push" method', () => {
        expect(props.history.push.mock.calls.length).toEqual(1);
      });
    });
  });
});
