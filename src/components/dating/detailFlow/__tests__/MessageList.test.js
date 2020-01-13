import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../MessageList';

describe('MessageList Component', () => {
  let wrapper;
  const props = {
    conversations: [],
    addCurrentMatchOnClick: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(
      <MessageList
        conversations={props.conversations}
        addCurrentMatchOnClick={props.addCurrentMatchOnClick}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with a className "detail-list-messages"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('detail-list-messages')).toEqual(true);
    });
  });
});
