import React from 'react';
import { shallow } from 'enzyme';
import ChatMessage from '../ChatMessage';

describe('ChatMessage Component', () => {
  let wrapper;
  const props = {
    userID: 1,
    message: { user_id: 1, content: 'hey' },
    matchUser: {
      character: { avatar_urls: ['fakeimage.com'] },
      avatarIndex: 0,
    },
  };

  beforeAll(() => {
    wrapper = shallow(
      <ChatMessage
        userID={props.userID}
        message={props.message}
        matchUser={props.matchUser}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with a className "chat-message"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('chat-message')).toEqual(true);
    });
  });
});
