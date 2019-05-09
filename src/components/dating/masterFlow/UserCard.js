import React from 'react'

class UserCard extends React.Component {

  render() {
    const {user} = this.props
    let randomIndex;
    user.character === null ? randomIndex = 0 : randomIndex = Math.floor(Math.random() * user.character["avatar_urls"].length)

    return (
      <div className="user-card" style={
        {backgroundImage: `url("${user.character["avatar_urls"][randomIndex]}")`}
      }>
        <div className="card-info">

          <div className="info-header">
            <div className="username">
              <span>{user.username}</span>
            </div>

            <div className="user-age">
              <span>{user.age}</span>
            </div>
          </div>

          <div className="personality">
            <span>{user.character["personality_type"]}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default UserCard;
