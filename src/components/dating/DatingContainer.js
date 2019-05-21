import React from 'react';
import '../../style/DatingContainer.css'
import { connect } from 'react-redux';
import MasterContainer from './masterFlow/MasterContainer'
import ConversationContainer from './masterFlow/ConversationContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {

  state = {
    currentClicked: {},
    currentConversation: {}
  }

  addCurrentMatchOnClick = (user) => {
    let currentConvo = this.props.conversations.find(conversation => {
      return conversation.user.id === user.id
    })

    if (currentConvo !== undefined) {
      this.setState({
        currentClicked: user,
        currentConversation: currentConvo
      })
    } else {
      this.setState({
        currentClicked: user,
        currentConversation: {}
      })
    }
  }

  exitProfileOnClick = () => {
    this.setState({
      currentClicked: {}
    })
  }

  render() {
    return (
      <React.Fragment>
        { this.props.token ?
          <div className="dating-container">
            <DetailContainer
              addCurrentMatchOnClick={this.addCurrentMatchOnClick}/>

            { Object.keys(this.state.currentClicked).length > 0 ?
              <ConversationContainer
                exitProfileOnClick={this.exitProfileOnClick}
                user={this.state.currentClicked}
                conversation={this.state.currentConversation}
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

const mapStateToProps = ({ auth }) => {
  return {
    conversations: auth.conversations,
    token: auth.token
  }
}

export default connect(mapStateToProps)(DatingContainer);
