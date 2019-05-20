import React from 'react';
import '../../style/DatingContainer.css'
import { connect } from 'react-redux';
import MasterContainer from './masterFlow/MasterContainer'
import ConversationContainer from './masterFlow/ConversationContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {

  state = {
    currentClicked: {},
  }

  addCurrentMatchOnClick = (user) => {
    this.setState({currentClicked: user})
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
  return {token: auth.token}
}

export default connect(mapStateToProps)(DatingContainer);
