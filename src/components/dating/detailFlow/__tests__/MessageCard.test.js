import React from 'react';
import { shallow } from 'enzyme';
import MessageCard from '../MessageCard';

describe('MatchCard Component', () => {
  let wrapper;
  const dummyUser = {
    username: 'liikemike',
    character: { avatar_urls: ['fakeimage.com'] },
  };
  const dummyMessage = {
    content: 'hey there...',
  };
  const props = {
    userConvo: {
      user: dummyUser,
      messages: [dummyMessage],
    },
    addCurrentMatchOnClick: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(
      <MessageCard
        userConvo={props.userConvo}
        addCurrentMatchOnClick={props.addCurrentMatchOnClick}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "message-card"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('message-card')).toEqual(true);
    });

    it('should display a <p> tag with a username', () => {
      const infoUserNameDiv = wrapper.find('.info-username');
      expect(infoUserNameDiv.type()).toEqual('p');
      expect(infoUserNameDiv.text()).toEqual('liikemike');
    });

    it('should display a <p> tag with the latest message', () => {
      const infoLastMessageDiv = wrapper.find('.info-last-message');
      expect(infoLastMessageDiv.type()).toEqual('p');
      expect(infoLastMessageDiv.text()).toEqual('hey there...');
    });
  });

  describe('when clicked', () => {
    it('should invoke "addCurrentMatchOnClick" method', () => {
      wrapper.simulate('click');
      expect(props.addCurrentMatchOnClick.mock.calls.length).toEqual(1);
    });
  });
});
