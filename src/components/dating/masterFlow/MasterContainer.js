import React from 'react';
import Swipeable from "react-swipy"
import UserCard from './UserCard';
import GameIconSmall from './GameIconSmall';
import GameIconLarge from './GameIconLarge';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/usersActions';
import nope from '../../../images/tinder-nope.png'
import back from '../../../images/tinder-back.png'
import favorite from '../../../images/tinder-favorite.png'
import like from '../../../images/tinder-like.png'
import leftKey from '../../../images/key-left.png'
import rightKey from '../../../images/key-right.png'
import upKey from '../../../images/key-up.png'
import downKey from '../../../images/key-down.png'
import spaceKey from '../../../images/space-key.png'

class MasterContainer extends React.Component {

  state = {
    cardIndex: 0
  }

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
        <div className="">
          <Swipeable>
            <UserCard />
          </Swipeable>
        </div>

        <div className="gamepad">
          <GameIconSmall img={back}/>
          <GameIconLarge img={nope}/>
          <GameIconSmall img={favorite}/>
          <GameIconLarge img={like}/>
        </div>

        <div className="toolbar">
          <div className="toolbar-icons">
            <img src={leftKey}/>
            <span>NOPE</span>
          </div>

          <div className="toolbar-icons">
            <img src={rightKey}/>
            <span>LIKE</span>
          </div>

          <div className="toolbar-icons">
            <img src={upKey}/>
            <span>OPEN PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img src={downKey}/>
            <span>CLOSE PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img id="space-key" src={spaceKey}/>
            <span>NEXT PHOTO</span>
          </div>

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
