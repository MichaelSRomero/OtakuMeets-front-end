import React from 'react';


class MatchCard extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div
        className="match-card"
        style={
          {backgroundImage: `url("${user.character["avatar_urls"][0]}")`}
        }>
        <div className="match-info">
          <span>{user.username}</span>
        </div>
      </div>
    )
  }
}

export default MatchCard;
