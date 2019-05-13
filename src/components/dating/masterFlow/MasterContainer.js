import React from 'react';
import Swipeable from "react-swipy"
import UserCard from './UserCard';
import GameIconSmall from './GameIconSmall';
import GameIconLarge from './GameIconLarge';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/usersActions';
import { createMatch } from '../../../actions/authActions';
import nope from '../../../images/tinder-nope.png'
import back from '../../../images/tinder-back.png'
import backNull from '../../../images/tinder-back-null.png'
import favorite from '../../../images/tinder-favorite.png'
import like from '../../../images/tinder-like.png'
import leftKey from '../../../images/key-left.png'
import rightKey from '../../../images/key-right.png'
import upKey from '../../../images/key-up.png'
import downKey from '../../../images/key-down.png'
import spaceKey from '../../../images/space-key.png'

const noUsersStyle = {
  textAlign: "center",
  lineHeight: "475px",
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: "20px"
}

class MasterContainer extends React.Component {

  state = {
    cardIndex: 0,
    pressedBack: false
  }

  componentDidMount() {
    const userID = this.props.auth.id
    this.props.getAllUsers(userID)
  }

  areUsersLeft = () => {
    return this.props.users.length > this.state.cardIndex
  }

  onSwipe = (direction) => {
    switch(direction) {
      case "left":
        alert("NEXT!")
        break
      case "right":
        const loggedInUser = this.props.auth.id
        const currentUser = this.props.users[this.state.cardIndex]

        this.props.createMatch(loggedInUser, currentUser)
        alert("Liked User")
        break
      default:
        console.log("...")
        break
    }

    this.setState( (state) => ({cardIndex: state.cardIndex + 1}) )
  }

  back = () => {
    if (!this.state.pressedBack && this.state.cardIndex > 0) {
      this.setState( (state) =>
        ({
          cardIndex: state.cardIndex - 1,
          pressedBack: true
        }))
    }
  }

  next = () => {
    if (this.areUsersLeft()) {
      this.setState( (state) => ({cardIndex: state.cardIndex + 1}) )
    }
  }

  like = () => {
    const loggedInUser = this.props.auth.id
    const currentUser = this.props.users[this.state.cardIndex]

    if (this.areUsersLeft()) {
      this.props.createMatch(loggedInUser, currentUser)
      alert("Liked User")
      this.setState( (state) => ({cardIndex: state.cardIndex + 1}) )

    }
  }

  render() {

    return ( this.props.users.length > 0 &&
      <div className="master-container">
        {this.areUsersLeft() ?
          <div className="">
            <Swipeable
              onSwipe={ direction => this.onSwipe(direction) }>
              <UserCard user={this.props.users[this.state.cardIndex]} />
            </Swipeable>
          </div>
          :
          <div className="user-card" style={noUsersStyle}>
            <span>There's no one new around you.</span>
          </div>
        }

        <div className="gamepad">
          {
            this.state.cardIndex > 0 && !this.state.pressedBack ?
            <GameIconSmall img={back} handleClick={this.back}/>
            :
            <GameIconSmall img={backNull} handleClick={this.back}/>
          }
          <GameIconLarge img={nope} handleClick={this.next}/>
          <GameIconSmall img={favorite}/>
          <GameIconLarge img={like} handleClick={this.like}/>
        </div>

        <div className="toolbar">
          <div className="toolbar-icons">
            <img src={leftKey} alt="toolbar icon"/>
            <span>NOPE</span>
          </div>

          <div className="toolbar-icons">
            <img src={rightKey} alt="toolbar icon"/>
            <span>LIKE</span>
          </div>

          <div className="toolbar-icons">
            <img src={upKey} alt="toolbar icon"/>
            <span>OPEN PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img src={downKey} alt="toolbar icon"/>
            <span>CLOSE PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img id="space-key" src={spaceKey} alt="toolbar icon"/>
            <span>NEXT PHOTO</span>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, auth}) => {
  // return {users: users.allUsers, auth: auth}
  if (auth.preference === "Female") {
    return {users: users.femaleUsers, auth: auth}
  } else if (auth.preference === "Male") {
    return {users: users.maleUsers, auth: auth}
  } else {
    return {users: users.allUsers, auth: auth}
  }
}

export default connect(mapStateToProps, { getAllUsers, createMatch })(MasterContainer);
