import React from 'react';
import { connect } from 'react-redux';

class CharacterContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.character["english_name"]}</h1>
        <img src={this.props.character.avatars} />
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  console.log("CHARACTER: ", auth.character);
  return {character: auth.character}
}

export default connect(mapStateToProps)(CharacterContainer);
