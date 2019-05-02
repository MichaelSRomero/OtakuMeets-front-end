import React from 'react';
import { connect } from 'react-redux';

class CharacterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
      {
        this.props.token ?
          <div>
            <h1>{this.props.character["english_name"]}</h1>
            <img src={this.props.character.avatars} />
          </div>
        :
          this.props.history.push('/')
      }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {character: auth.character, token: auth.token}
}

export default connect(mapStateToProps)(CharacterContainer);
