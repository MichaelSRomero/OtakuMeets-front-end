import React from 'react';
import MatchCard from './MatchCard';
import { connect } from 'react-redux';

class DetailContainer extends React.Component {

  createMatchCards = () => {
    return this.props.users.map(user => <MatchCard user={user} />)
  }

  render() {
    return (
      <div className="detail-container">

        <div className="list-header">
          <div className="list-header-text">
            <span>Matches</span>
          </div>

          <div className="list-header-text">
            <span>Messages</span>
          </div>
        </div>

        <div className="detail-list">
          <div className="match-card">
            <div className="match-info">
              <span>Wendy3000TheRare</span>
            </div>
          </div>

          <div className="match-card">
            <div className="match-info">
              <span>Wendy3000TheRare</span>
            </div>
          </div>

          <div className="match-card">
            <div className="match-info">
              <span>Wendy3000TheRare</span>
            </div>
          </div>

          <div className="match-card">
            <div className="match-info">
              <span>Wendy3000</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {users: users.allUsers}
}

export default connect(mapStateToProps)(DetailContainer);


// return ( this.props.users.length > 0 &&
  {/*<Grid className="detail-container" xs={4}>
    <div className="detail-list">
      {this.createMatchCards()}
    </div>
  </Grid>*/}
