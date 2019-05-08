import React from 'react';
import UserCard from './UserCard';
import GameIconSmall from './GameIconSmall';
import GameIconLarge from './GameIconLarge';
import Swipe from 'react-easy-swipe';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/usersActions';
import nope from '../../../images/tinder-nope.png'
import back from '../../../images/tinder-back.png'
import favorite from '../../../images/tinder-favorite.png'
import like from '../../../images/tinder-like.png'

class MasterContainer extends React.Component {

  componentDidMount() {
    const userID = this.props.auth.id
    this.props.getAllUsers(userID)
  }

  // createUserCards = () => {
  //   return this.props.users.map(user => {
  //     return <UserCard users={user}/>
  //   })
  // }

  render() {
    return (
      <div className="master-container">
        <div className="user-card">
        </div>

        <div className="gamepad">
          <GameIconSmall img={back}/>
          <GameIconLarge img={nope}/>
          <GameIconSmall img={favorite}/>
          <GameIconLarge img={like}/>
        </div>
      </div>
    )
  }
}

{/*<Grid
  className="master-container"
  container
  xs={8}
  alignItems="center"
  justify="center">
  <UserCard />
</Grid>*/}
const mapStateToProps = ({ users, auth}) => {
  return {users: users, auth: auth}
  // if (auth.preference === "Female") {
  //   return {users: users.femaleUsers, auth: auth}
  // } else if (auth.preference === "Male") {
  //   return {users: users.maleUsers, auth: auth}
  // } else {
  //   return {users: users.allUsers, auth: auth}
  // }
}

export default connect(mapStateToProps, { getAllUsers })(MasterContainer);
