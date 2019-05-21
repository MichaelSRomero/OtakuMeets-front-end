import React from 'react';
import '../../style/DatingContainer.css'
import { connect } from 'react-redux';
import { addCurrentUser, addCurrentConversation, removeCurrentUser } from '../../actions/usersActions'
import MasterContainer from './masterFlow/MasterContainer'
import ConversationContainer from './masterFlow/ConversationContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {

  addCurrentMatchOnClick = (user) => {
    let currentConvo = this.props.conversations.find(conversation => {
      return conversation.user.id === user.id
    })

    if (currentConvo !== undefined) {
      this.props.addCurrentUser(user)
      this.props.addCurrentConversation(currentConvo)
    } else {
      this.props.addCurrentUser(user)
      this.props.addCurrentConversation({})
    }
  }

  exitProfileOnClick = () => {
    this.props.removeCurrentUser()
  }

  render() {
    return (
      <React.Fragment>
        { this.props.token ?
          <div className="dating-container">
            <DetailContainer
              addCurrentMatchOnClick={this.addCurrentMatchOnClick}/>

            { Object.keys(this.props.currentClicked).length > 0 ?
              <ConversationContainer
                exitProfileOnClick={this.exitProfileOnClick}
                user={this.props.currentClicked}
                conversation={this.props.currentConversation}
              />
              :
              <MasterContainer />
            }
          </div>
          :
          this.props.history.push("/")
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth, users }) => {
  return {
    conversations: auth.conversations,
    currentClicked: users.currentClicked,
    currentConversation: users.currentConversation,
    token: auth.token
  }
}

export default connect(mapStateToProps, { addCurrentUser, addCurrentConversation, removeCurrentUser })(DatingContainer);
