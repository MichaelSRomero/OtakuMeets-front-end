const initialState = {
  id: '',
  username: '',
  token: '',
  character: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_TOKEN':
      return {...state, token: action.payload}
    case 'SIGN_UP':
      const userID = action.payload.user.id
      const username = action.payload.user.username

      return {...state, id: userID, username: username}
    case 'LOG_IN':
      const existingUser = action.payload

      return {...state, id: existingUser.id , username: existingUser.username}
    case 'LOG_OUT':
      localStorage.clear()
      return {...state, id: '', username: '', token: '', character: {}}
    default:
      return state;
  }
}

export default authReducer;
