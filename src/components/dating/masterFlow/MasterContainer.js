import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import Swipe from 'react-easy-swipe';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/usersActions';

class MasterContainer extends React.Component {

  componentDidMount() {
    const userID = this.props.auth.id
    this.props.getAllUsers(userID)
  }

  // createUserCards = () => {
  //   return this.props.users.map(user => {
  //     return <UserCard users={user}/>
  //   })
  // }

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
  // if (auth.preference === "Female") {
  //   return {users: users.femaleUsers, auth: auth}
  // } else if (auth.preference === "Male") {
  //   return {users: users.maleUsers, auth: auth}
  // } else {
  //   return {users: users.allUsers, auth: auth}
  // }
}

export default connect(mapStateToProps, { getAllUsers })(MasterContainer);
