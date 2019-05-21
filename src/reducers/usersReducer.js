const initialState = {
  allUsers: [],
  maleUsers: [],
  femaleUsers: [],
  currentClicked: {},
  currentConversation: {}
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_USERS":
      return {...state, allUsers: action.payload};
    case "ADD_MALE_USERS":
      return {...state, maleUsers: action.payload};
    case "ADD_FEMALE_USERS":
      return {...state, femaleUsers: action.payload}
    case "ADD_CURRENT_USER":
      return {...state, currentClicked: action.payload}
    case "ADD_CURRENT_CONVERSATION":
      return {...state, currentConversation: action.payload}
    case "REMOVE_CURRENT_USER":
      return {
        ...state,
        currentClicked: {},
        currentConversation: {},
      }
    default:
      return state;
  }
}

export default usersReducer;
