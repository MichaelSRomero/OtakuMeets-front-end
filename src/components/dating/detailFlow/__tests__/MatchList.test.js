import React from 'react';
import { shallow } from 'enzyme';
import MatchList from '../MatchList';

describe('MatchList Component', () => {
  let wrapper;
  const props = {
    matches: [],
    addCurrentMatchOnClick: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(
      <MatchList
        matches={props.matches}
        addCurrentMatchOnClick={props.addCurrentMatchOnClick}
      />,
    );
  });

  describe('when initialized', () => {
    it('should render a <div> tag with a className "detail-list"', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('detail-list')).toEqual(true);
    });
  });
});
