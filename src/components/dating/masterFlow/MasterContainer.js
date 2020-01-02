/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipy';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import GameIconSmall from './GameIconSmall';
import GameIconLarge from './GameIconLarge';
import { getAllUsers } from '../../../actions/usersActions';
import { createMatch } from '../../../actions/authActions';
import nope from '../../../images/tinder-nope.png';
import back from '../../../images/tinder-back.png';
import backNull from '../../../images/tinder-back-null.png';
import favorite from '../../../images/tinder-favorite.png';
import like from '../../../images/tinder-like.png';
import leftKey from '../../../images/key-left.png';
import rightKey from '../../../images/key-right.png';
import upKey from '../../../images/key-up.png';
import downKey from '../../../images/key-down.png';
import spaceKey from '../../../images/space-key.png';

const noUsersStyle = {
  textAlign: 'center',
  lineHeight: '475px',
  color: 'rgba(0, 0, 0, 0.5)',
  fontSize: '20px',
};

class MasterContainer extends Component {
  state = {
    cardIndex: 0,
    pressedBack: false,
  }

  componentDidMount() {
    const { id } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getAllUsers(id);
  }

  shouldComponentUpdate(props) {
    return props.users.length > 0;
  }

  onSwipe = (direction) => {
    const { cardIndex } = this.state;
    const {
      id,
      users,
      createMatch,
    } = this.props;
    const loggedInUser = id;
    const currentUser = users[cardIndex];
    switch (direction) {
      case 'left':
        break;
      case 'right':
        createMatch(loggedInUser, currentUser);
        break;
      default:
        break;
    }

    this.setState((state) => ({ cardIndex: state.cardIndex + 1 }));
  }

  back = () => {
    const {
      pressedBack,
      cardIndex,
    } = this.state;
    if (!pressedBack && cardIndex > 0) {
      this.setState((state) => ({
        cardIndex: state.cardIndex - 1,
        pressedBack: true,
      }));
    }
  }

  next = () => {
    if (this.areUsersLeft()) {
      this.setState((state) => ({ cardIndex: state.cardIndex + 1 }));
    }
  }

  like = () => {
    const { cardIndex } = this.state;
    const {
      id,
      users,
      createMatch,
    } = this.props;
    const loggedInUser = id;
    const currentUser = users[cardIndex];

    if (this.areUsersLeft()) {
      createMatch(loggedInUser, currentUser);

      this.setState((state) => ({ cardIndex: state.cardIndex + 1 }));
    }
  }

  areUsersLeft = () => {
    const { users } = this.props;
    const { cardIndex } = this.state;

    return users.length > cardIndex;
  }

  render() {
    const {
      cardIndex,
      pressedBack,
    } = this.state;
    const {
      users,
    } = this.props;
    return (
      <div className="master-container">
        {/* Only allow swiping if there are still users to swipe to*/}
        {this.areUsersLeft()
          ? (
            <div className="">
              <Swipeable
                onSwipe={(direction) => this.onSwipe(direction)}
              >
                <UserCard user={users[cardIndex]} />
              </Swipeable>
            </div>
          )
          : (
            <div className="user-card" style={noUsersStyle}>
              <span>There's no one new around you.</span>
            </div>
          )}
        {/**********************************
        ______________GAMEPAD______________
        **********************************/}
        <div className="gamepad">
          {/* Render "back-icon" colored if it hasn't been clicked and it's not the beginning of the list
          else render the grey colored image */}
          {
            cardIndex > 0 && !pressedBack
              ? (
                <GameIconSmall
                  img={back}
                  handleClick={this.back}
                />
              )
              : (
                <GameIconSmall
                  img={backNull}
                  handleClick={this.back}
                />
              )
          }
          <GameIconLarge
            img={nope}
            handleClick={this.next}
          />
          <GameIconSmall img={favorite} />
          <GameIconLarge
            img={like}
            handleClick={this.like}
          />
        </div>
        {/**********************************
        ______________TOOLBAR______________
        **********************************/}
        <div className="toolbar">
          <div className="toolbar-icons">
            <img src={leftKey} alt="toolbar icon" />
            <span>NOPE</span>
          </div>

          <div className="toolbar-icons">
            <img src={rightKey} alt="toolbar icon" />
            <span>LIKE</span>
          </div>

          <div className="toolbar-icons">
            <img src={upKey} alt="toolbar icon" />
            <span>OPEN PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img src={downKey} alt="toolbar icon" />
            <span>CLOSE PROFILE</span>
          </div>

          <div className="toolbar-icons">
            <img id="space-key" src={spaceKey} alt="toolbar icon" />
            <span>NEXT PHOTO</span>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, auth }) => {
  if (auth.preference === 'Female') {
    return { users: users.femaleUsers, id: auth.id };
  } if (auth.preference === 'Male') {
    return { users: users.maleUsers, id: auth.id };
  }
  return { users: users.allUsers, id: auth.id };
};

MasterContainer.propTypes = {
  id: PropTypes.number,
  users: PropTypes.arrayOf(PropTypes.object),
  getAllUsers: PropTypes.func,
  createMatch: PropTypes.func,
};

export default connect(mapStateToProps, { getAllUsers, createMatch })(MasterContainer);
