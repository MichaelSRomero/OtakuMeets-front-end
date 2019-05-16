import React from 'react';
import MatchCard from './MatchCard';
import MatchList from './MatchList';
import MessageList from './MessageList';
import { connect } from 'react-redux';

const style = {
  borderBottom: "rgba(255, 0, 0, 0.8) solid 3px"
}

class DetailContainer extends React.Component {

  state = {
    currentHeader: "Matches"
  }

  handleClick = (e) => {
    const header = e.target.innerText
    this.setState({currentHeader: header})
  }

  render() {

    return (
      <div className="detail-container">

        <div className="list-header">
          <div
            className="list-header-text"
            style={this.state.currentHeader === "Matches" ? style : null}>
            <span onClick={this.handleClick}>Matches</span>
          </div>

          <div
            className="list-header-text"
            style={this.state.currentHeader === "Messages" ? style : null}>
            <span onClick={this.handleClick}>Messages</span>
          </div>
        </div>
        {/* RENDER MESSAGES OR MATCHES BASED ON THE CURRENTHEADER CLICKED */}
        {
          this.props.matches.length > 0 ?
          this.state.currentHeader === "Matches" ?
            <MatchList matches={this.props.matches} handleClick={this.props.handleClick}/>
          :
            <MessageList />
          :
          <div className="detail-list-empty">
            <div className="empty-img">
            </div>
            <p className="empty-title">Get Swiping</p>
            <p>You have no matches yet</p>
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {matches: auth.matches}
}

export default connect(mapStateToProps)(DetailContainer);

// this.props.matches.length > 0
