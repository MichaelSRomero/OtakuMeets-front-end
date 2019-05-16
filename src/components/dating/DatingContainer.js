import React from 'react';
import '../../style/DatingContainer.css'
import { connect } from 'react-redux';
import MasterContainer from './masterFlow/MasterContainer'
import ConversationContainer from './masterFlow/ConversationContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {

  state = {
    currentClicked: {}
  }

  handleClick = (user) => {
    console.log(user);
    this.setState({currentClicked: user})
  }

  render() {
    return (
      <React.Fragment>
        { this.props.token ?
          <div className="dating-container">
            <DetailContainer handleClick={this.handleClick}/>
            { Object.keys(this.state.currentClicked).length > 0 ?
              <ConversationContainer />
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
  return {token: auth.token}
}

export default connect(mapStateToProps)(DatingContainer);
