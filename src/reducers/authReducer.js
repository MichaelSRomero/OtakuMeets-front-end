const initialState = {
  id: '',
  username: '',
  token: '',
  character: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CHARACTER":
      return {...state, character: action.payload}
    case 'SAVE_TOKEN':
      return {...state, token: action.payload}
    case 'SIGN_UP':
      const userID = action.payload.user.id
      const username = action.payload.user.username

      return {...state, id: userID, username: username}
    case 'LOG_IN':
      const existingUser = action.payload
      // TODO:
      // (1) Save character to state

      return {
        ...state,
        id: existingUser.id ,
        username: existingUser.username,
        character: existingUser.character
      }
    case 'LOG_OUT':
      localStorage.clear()
      return {...state, id: '', username: '', token: '', character: {}}
    default:
      return state;
  }
}

export default authReducer;
