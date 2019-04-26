export const signUp = (newUserState) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: newUserState})
    }).then(res => res.json())
      .then(userJSON => console.log)
  }
}
