import React from 'react';
import PropTypes from 'prop-types';
import MatchCard from './MatchCard';

const MatchList = (props) => {
  const {
    matches,
    addCurrentMatchOnClick,
  } = props;
  const createMatchCards = () => {
    return matches.map((user) => (
      <MatchCard
        key={`MatchCard ${user.id}`}
        user={user}
        addCurrentMatchOnClick={addCurrentMatchOnClick}
      />
    ));
  };

  return (
    <div className="detail-list">
      {createMatchCards()}
    </div>
  );
};

MatchList.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object),
  addCurrentMatchOnClick: PropTypes.func,
};


export default MatchList;
