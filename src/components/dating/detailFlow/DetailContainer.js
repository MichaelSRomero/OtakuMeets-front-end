import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import MatchCard from './MatchCard';
import { connect } from 'react-redux';

class DetailContainer extends React.Component {

  createMatchCards = () => {
    return this.props.users.map(user => <MatchCard user={user} />)
  }

  render() {
    return ( this.props.users.length > 0 &&
      <Grid className="detail-container" xs={4}>
        <div className="detail-list">
          {this.createMatchCards()}
        </div>
      </Grid>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {users: users.allUsers}
}

export default connect(mapStateToProps)(DetailContainer);
