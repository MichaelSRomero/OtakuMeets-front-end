import React from 'react';
import MatchCard from './MatchCard';
import { connect } from 'react-redux';

const style = {
  borderBottom: "rgba(255, 0, 0, 0.8) solid 3px"
}

class DetailContainer extends React.Component {

  state = {
    currentHeader: "Matches"
  }

  createMatchCards = () => {
    return this.props.matches.map(user => <MatchCard key={user.id} user={user} />)
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

        {
          this.props.matches.length > 0 ?
          <div className="detail-list">
            {this.createMatchCards()}
          </div>
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


// return ( this.props.users.length > 0 &&
  {/*<Grid className="detail-container" xs={4}>
    <div className="detail-list">
      {this.createMatchCards()}
    </div>
  </Grid>*/}
