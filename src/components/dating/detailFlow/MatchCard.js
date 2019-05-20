import React from 'react';

class MatchCard extends React.Component {
  render() {
    const { user } = this.props
    let randomIndex = Math.floor(Math.random() * user.character["avatar_urls"].length)

    return (
      <div
        className="match-card"
        style={
          {backgroundImage: `url("${user.character["avatar_urls"][randomIndex]}")`}
        }
        onClick={() => this.props.addCurrentMatchOnClick({...user, avatarIndex: randomIndex}) }>
        <div className="match-info">
          <span>{user.username}</span>
        </div>
      </div>
    )
  }
}

export default MatchCard;
