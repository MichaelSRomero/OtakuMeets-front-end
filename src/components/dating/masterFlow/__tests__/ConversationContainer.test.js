import React from 'react';
import { shallow } from 'enzyme';
import { ConversationContainer } from '../ConversationContainer';

describe('ConversationContainer Component', () => {
  let wrapper;
  const dummyCharacter = {
    english_name: 'Naruto',
    japanese_name: 'Naruto',
    alias: 'Gutsy Ninja',
    show: 'Naruto',
    avatar_urls: ['fakeimage.com'],
    personality: 'ISFP',
  };
  const dummyUser = {
    username: 'Liikemike',
    age: 28,
    gender: 'Male',
    character: dummyCharacter,
    avatarIndex: 0,
  };
  const props = {
    exitProfileOnClick: jest.fn(),
    user: dummyUser,
    conversation: { messages: [] },
  };

  beforeAll(() => {
    wrapper = shallow(
      <ConversationContainer
        exitProfileOnClick={props.exitProfileOnClick}
        user={props.user}
        conversation={props.conversation}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "conversation-container"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('conversation-container')).toEqual(true);
    });

    it('should render a <p> with a username', () => {
      const pTag = wrapper.find('p').first();
      expect(pTag.type()).toEqual('p');
      expect(pTag.text()).toEqual('You matched withLiikemike');
    });

    it('should render a <span> tag with a username', () => {
      const usernameTag = wrapper.find('.profile-header').childAt(0);
      expect(usernameTag.type()).toEqual('span');
      expect(usernameTag.text()).toEqual('Liikemike');
    });

    it('should render a <span> tag with a user\'s age', () => {
      const ageTag = wrapper.find('.profile-header').childAt(1);
      expect(ageTag.type()).toEqual('span');
      expect(ageTag.text()).toEqual('28');
    });

    it('should render a <span> tag with a user\'s personality', () => {
      const personalityTag = wrapper.find('.sub-row').first().childAt(1);
      expect(personalityTag.type()).toEqual('span');
      expect(personalityTag.text()).toEqual('ISFP');
    });

    it('should render a <span> tag with a user\'s gender', () => {
      const genderTag = wrapper.find('.sub-row').last().childAt(1);
      expect(genderTag.type()).toEqual('span');
      expect(genderTag.text()).toEqual('Male');
    });

    it('should render a <span> tag with a character\'s english name', () => {
      const englishNameTag = wrapper.find('.character-row').first().childAt(1);
      expect(englishNameTag.type()).toEqual('span');
      expect(englishNameTag.text()).toEqual('Naruto');
    });

    it('should render a <span> tag with a character\'s japanese name', () => {
      const japaneseNameTag = wrapper.find('.character-row').at(1).childAt(1);
      expect(japaneseNameTag.type()).toEqual('span');
      expect(japaneseNameTag.text()).toEqual('Naruto');
    });

    it('should render a <span> tag with a character\'s alias', () => {
      const aliasTag = wrapper.find('.character-row').at(2).childAt(1);
      expect(aliasTag.type()).toEqual('span');
      expect(aliasTag.text()).toEqual('Gutsy Ninja');
    });

    it('should render a <span> tag with a character\'s show', () => {
      const showTag = wrapper.find('.character-row').at(3).childAt(1);
      expect(showTag.type()).toEqual('span');
      expect(showTag.text()).toEqual('Naruto');
    });
  });

  describe('when close icon is clicked', () => {
    it('should invoke exitProfileOnClick method', () => {
      const iconTag = wrapper.find('.chat-nav-bar img');
      iconTag.simulate('click');
      expect(props.exitProfileOnClick.mock.calls.length).toEqual(1);
    });
  });
});
