import React from 'react';
import Card from '@material-ui/core/Card';


class MatchCard extends React.Component {
  render() {
    return (
      this.props.user.length > 0 &&
      <Card
        className="match-card"
        style={
          {backgroundImage: `url(${this.props.user.character.avatars[0]})`}
        }>
        <h4>USERNAME: {this.props.user.username}</h4>
      </Card>
    )
  }
}

export default MatchCard;
