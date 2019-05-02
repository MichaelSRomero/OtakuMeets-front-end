import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/usersActions';

class MasterContainer extends React.Component {

  componentDidMount() {
    const userID = this.props.auth.id
    this.props.getAllUsers(userID)
  }

  render() {
    return (
      <Grid
        className="master-container"
        container
        xs={8}
        alignItems="center"
        justify="center">
        <UserCard />
      </Grid>
    )
  }
}

const mapStateToProps = ({ users, auth}) => {
  return {users: users, auth: auth}
}

export default connect(mapStateToProps, { getAllUsers })(MasterContainer);
