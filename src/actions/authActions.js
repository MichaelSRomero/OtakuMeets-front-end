/////////////////////////////////////////
//___________ACTION CREATORS___________//
/////////////////////////////////////////
const createUser = (newUser) => ({type: 'SIGN_UP', payload: newUser})
const logInUser = (existingUser) => ({type: 'LOG_IN', payload: existingUser})
const addCharacter = (character) => ({type: 'ADD_CHARACTER', payload: character})
export const logOutUser = () => ({type: 'LOG_OUT'})
export const saveToken = (token) => ({type: 'SAVE_TOKEN', payload: token})

/////////////////////////////////////////
//___________THUNK CREATORS____________//
/////////////////////////////////////////
export const signUp = (newUserState, push) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: newUserState})
    }).then(res => res.json())
      .then(userJSON => {
        if (userJSON.jwt) {
          dispatch(createUser(userJSON))
          dispatch(saveToken(userJSON.jwt))
          localStorage.setItem('jwt', userJSON.jwt)

          push('/quiz-splash')
        } else {
          console.log("ERRORS: ", userJSON)
        }
      })
  }
}

export const logIn = (userObj, push) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...userObj})
    }).then(res => res.json())
      .then(userJSON => {
        if (userJSON.jwt) {
          dispatch(logInUser(userJSON.user))
          dispatch(saveToken(userJSON.jwt))
          localStorage.setItem('jwt', userJSON.jwt)

          // PUSH EXISTING USER TO REGULAR PAGE
          push('/home')
        } else {
          console.log("ERRORS: ", userJSON)
        }
      })
  }
}

export const addCharacterToUser = (userID, personalityType) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/users/${userID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"personality": personalityType})
    }).then(res => res.json())
      .then(updatedUser => {
        dispatch(addCharacter(updatedUser.character))
      })
  }
}
