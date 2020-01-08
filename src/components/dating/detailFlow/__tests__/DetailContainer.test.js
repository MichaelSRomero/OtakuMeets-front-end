import React from 'react';
import { shallow, render } from 'enzyme';
import { DetailContainer } from '../DetailContainer';

describe('DetailContainer Component', () => {
  let wrapper;
  const props = {
    matches: [],
    conversations: [],
    addCurrentMatchOnClick: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(
      <DetailContainer
        matches={props.matches}
        conversations={props.conversations}
        addCurrentMatchOnClick={props.addCurrentMatchOnClick}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "detail-container"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('detail-container')).toEqual(true);
    });

    describe('when matches/conversations list is empty', () => {
      it('should render a <div> tag with className "detail-list-empty" as child', () => {
        expect(wrapper.find('.detail-list-empty').type()).toEqual('div');
        expect(wrapper.find('.detail-list-empty').hasClass('detail-list-empty')).toEqual(true);
      });
    });

    describe('when matches list exist', () => {
      let matchWrapper;

      beforeAll(() => {
        const dummyMatches = [{
          username: 'liikemike', character: { avatar_urls: ['fakeimage.com'] },
        }];
        matchWrapper = render(
          <DetailContainer
            matches={dummyMatches}
          />,
        );
      });

      it('should render a <div> tag with className "detail-list" as child', () => {
        const detailListDiv = matchWrapper.find('.detail-list')[0];
        expect(detailListDiv.tagName).toEqual('div');
        expect(detailListDiv.attribs.class).toEqual('detail-list');
      });
    });
  });

  describe('when header is clicked', () => {
    const dummyEvent = {
      target: { innerText: 'Messages' },
    };

    it('should change state to "Messages"', () => {
      wrapper.find('.list-header').childAt(1).find('span').simulate('click', dummyEvent);
      expect(wrapper.state().currentHeader).toEqual('Messages');
      expect(wrapper.state().currentHeader).not.toEqual('Matches');
    });
  });
});
