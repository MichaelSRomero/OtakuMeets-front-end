import React from 'react';
import { connect } from 'react-redux';


class MatchCard extends React.Component {
  render() {
    return (
      <div className="match-card">
        <div className="match-info">
          <span>{this.props.username}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (auth) => {
  return {username: auth.username}
}

export default connect(mapStateToProps)(MatchCard);

// <Card
//   className="match-card"
//   style={
//     {backgroundImage: `url(${this.props.user.character.avatars[0]})`}
//   }>
//   <h4>USERNAME: {this.props.user.username}</h4>
// </Card>
