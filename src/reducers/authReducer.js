const initialState = {
  id: '',
  username: '',
  gender: '',
  preference: '',
  token: '',
  character: {},
  matches: [],
  conversations: []
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CHARACTER":
      return {...state, character: action.payload}
    case "ADD_NEW_MATCH":
      let newMatches = [action.payload ,...state.matches]

      return {
        ...state,
        matches: newMatches
      }
    case 'SAVE_TOKEN':
      return {...state, token: action.payload}
    case 'SIGN_UP':
      const userID = action.payload.user.id
      const username = action.payload.user.username
      const gender = action.payload.user.gender
      const preference = action.payload.user.preference

      return {...state, id: userID, username: username, gender: gender, preference: preference}
    case 'LOG_IN':
      const existingUser = action.payload

      return {
        ...state,
        id: existingUser.id ,
        username: existingUser.username,
        preference: existingUser.preference,
        character: existingUser.character,
        matches: existingUser["confirmed_matches"],
        conversations: existingUser.conversations
      }
    case 'LOG_OUT':
      localStorage.clear()
      return {
        ...state,
        id: '',
        username: '',
        token: '',
        preference: '',
        character: {}
      }
    default:
      return state;
  }
}

export default authReducer;
