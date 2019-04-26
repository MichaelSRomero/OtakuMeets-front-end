const initialState = {}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return "User signed up"
    case 'LOG_IN':
      return "User logged in"
    default:
      return state;
  }
}

export default authReducer;
