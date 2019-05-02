import React from 'react'
import Card from '@material-ui/core/Card';

class UserCard extends React.Component {

  render() {
    return (
      <Card className="user-card" raised>
        <h4>USERNAME</h4>
      </Card>
    )
  }
}

export default UserCard;
