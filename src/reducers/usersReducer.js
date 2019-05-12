const initialState = {
  allUsers: [],
  maleUsers: [],
  femaleUsers: [],
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_USERS":
      return {...state, allUsers: action.payload};
    case "ADD_MALE_USERS":
      return {...state, maleUsers: action.payload};
    case "ADD_FEMALE_USERS":
      return {...state, femaleUsers: action.payload}
    default:
      return state;
  }
}

export default usersReducer;
