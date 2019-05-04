import React from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';

class UserCard extends React.Component {

  state = {
    index: 0
  }

  handleClick = () => {
    if (this.state.index < this.props.users.length - 1) {
      this.setState(state => ({index: state.index + 1}))
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   // Only hit Render when length is different
  //   return nextProps.users.length !== this.props.users.length || this.state.index > 0
  // }

  render() {
    const {index} = this.state
    console.log("RENDER: ", this.props.users);

    return (
      this.props.users.length > 0 &&
      <Card
        className="user-card"
        raised
        style={
          {backgroundImage: `url(${this.props.users[index].character.avatars[0]})`}
        }
        onClick={this.handleClick}>
        <h4>USERNAME: {this.props.users[index].username}</h4>
      </Card>
    )
    // return (
    //   <Card
    //     className="user-card"
    //     raised
    //     style={
    //       {backgroundImage: `url(${this.props.users.character.avatars[0]})`}
    //     }
    //   >
    //   </Card>
    // )
  }
}

const mapStateToProps = ({ users, auth}) => {
  if (auth.preference === "Female") {
    return {users: users.femaleUsers}
  } else if (auth.preference === "Male") {
    return {users: users.maleUsers}
  } else {
    return {users: users.allUsers}
  }
}

export default connect(mapStateToProps)(UserCard);
// export default UserCard;
