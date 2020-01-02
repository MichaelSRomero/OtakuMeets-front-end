import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MatchList from './MatchList';
import MessageList from './MessageList';

const style = {
  borderBottom: 'rgba(255, 0, 0, 0.8) solid 3px',
};

class DetailContainer extends Component {
  state = {
    currentHeader: 'Matches',
  }

  changeHeaderOnClick = (e) => {
    const header = e.target.innerText;
    this.setState({ currentHeader: header });
  }

  renderHeader = () => {
    const { currentHeader } = this.state;
    const {
      matches,
      conversations,
      addCurrentMatchOnClick,
    } = this.props;

    if (currentHeader === 'Matches') {
      return (
        <MatchList
          matches={matches}
          addCurrentMatchOnClick={addCurrentMatchOnClick}
        />
      );
    }
    // Default render
    return (
      <MessageList
        conversations={conversations}
        addCurrentMatchOnClick={addCurrentMatchOnClick}
      />
    );
  }

  render() {
    const { currentHeader } = this.state;
    const {
      matches,
    } = this.props;

    return (
      <div className="detail-container">

        <div className="list-header">
          <div
            className="list-header-text"
            style={currentHeader === 'Matches' ? style : null}
          >
            <span onClick={this.changeHeaderOnClick}>Matches</span>
          </div>

          <div
            className="list-header-text"
            style={currentHeader === 'Messages' ? style : null}
          >
            <span onClick={this.changeHeaderOnClick}>Messages</span>
          </div>
        </div>
        {/* RENDER MESSAGES OR MATCHES BASED ON THE CURRENTHEADER CLICKED */}
        {
          matches.length > 0
            ? this.renderHeader()
            : (
              <div className="detail-list-empty">
                <div className="empty-img" />
                <p className="empty-title">Get Swiping</p>
                <p>You have no matches yet</p>
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    matches: auth.matches,
    conversations: auth.conversations,
  };
};

DetailContainer.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object),
  conversations: PropTypes.arrayOf(PropTypes.object),
  addCurrentMatchOnClick: PropTypes.func,
};

export default connect(mapStateToProps)(DetailContainer);
