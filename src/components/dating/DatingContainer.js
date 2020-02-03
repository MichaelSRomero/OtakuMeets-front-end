import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/DatingContainer.css';
import { connect } from 'react-redux';
import { addCurrentUser, addCurrentConversation, removeCurrentUser } from '../../actions/usersActions';
import MasterContainer from './masterFlow/MasterContainer';
import ConversationContainer from './masterFlow/ConversationContainer';
import DetailContainer from './detailFlow/DetailContainer';

class DatingContainer extends Component {
  addCurrentMatchOnClick = (user) => {
    const {
      conversations,
    } = this.props;
    const currentConvo = conversations.find((conversation) => {
      return conversation.user.id === user.id;
    });

    if (currentConvo !== undefined) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addCurrentUser(user);
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addCurrentConversation(currentConvo);
    } else {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addCurrentUser(user);
      // eslint-disable-next-line react/destructuring-assignment
      this.props.addCurrentConversation({});
    }
  }

  exitProfileOnClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.removeCurrentUser();
  }

  render() {
    const {
      token,
      history,
      currentClicked,
      currentConversation,
    } = this.props;
    return (
      <>
        { token
          ? (
            <div className="dating-container">
              <DetailContainer
                addCurrentMatchOnClick={this.addCurrentMatchOnClick}
              />

              { Object.keys(currentClicked).length > 0
                ? (
                  <ConversationContainer
                    exitProfileOnClick={this.exitProfileOnClick}
                    user={currentClicked}
                    conversation={currentConversation}
                  />
                )
                : <MasterContainer />}
            </div>
          )
          : history.push('/')}
      </>
    );
  }
}

const mapStateToProps = ({ auth, users }) => {
  return {
    conversations: auth.conversations,
    currentClicked: users.currentClicked,
    currentConversation: users.currentConversation,
    token: auth.token,
  };
};

DatingContainer.propTypes = {
  token: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  currentClicked: PropTypes.shape({}),
  currentConversation: PropTypes.shape({}),
  conversations: PropTypes.arrayOf(PropTypes.object),
  addCurrentUser: PropTypes.func,
  addCurrentConversation: PropTypes.func,
  removeCurrentUser: PropTypes.func,
};

export default connect(mapStateToProps, { addCurrentUser, addCurrentConversation, removeCurrentUser })(DatingContainer);
