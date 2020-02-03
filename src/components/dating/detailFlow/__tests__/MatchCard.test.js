import React from 'react';
import { shallow } from 'enzyme';
import MatchCard from '../MatchCard';

describe('MatchCard Component', () => {
  let wrapper;
  const props = {
    user: {
      username: 'liikemike',
      character: { avatar_urls: ['fakeimage.com'] },
    },
    addCurrentMatchOnClick: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(
      <MatchCard
        user={props.user}
        addCurrentMatchOnClick={props.addCurrentMatchOnClick}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with className "match-card"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('match-card')).toEqual(true);
    });

    it('should display a <span> tag with a username', () => {
      const matchInfoDiv = wrapper.find('.match-info');
      expect(matchInfoDiv.childAt(0).type()).toEqual('span');
      expect(matchInfoDiv.first().text()).toEqual('liikemike');
    });
  });

  describe('when clicked', () => {
    it('should invoke "addCurrentMatchOnClick" method', () => {
      wrapper.simulate('click');
      expect(props.addCurrentMatchOnClick.mock.calls.length).toEqual(1);
    });
  });
});
