/////////////////////////////////////////
//___________ACTION CREATORS___________//
/////////////////////////////////////////
const addUsers = (users) => ({type: 'ADD_USERS', payload: users})
const addMaleUsers = (males) => ({type: 'ADD_MALE_USERS', payload: males})
const addFemaleUsers = (females) => ({type: 'ADD_FEMALE_USERS', payload: females})
export const addCurrentUser = (user) => ({type: 'ADD_CURRENT_USER', payload: user})
export const addCurrentConversation = (conversation) => ({type: 'ADD_CURRENT_CONVERSATION', payload: conversation})
export const removeCurrentUser = () => ({type: 'REMOVE_CURRENT_USER'})
/////////////////////////////////////////
//___________THUNK CREATORS____________//
/////////////////////////////////////////
export const getAllUsers = (currentUserID) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/other/${currentUserID}`)
      .then(res => res.json())
      .then(usersJSON => {
        // Pesimistically Update later
        const otherUsers = filterOtherUsers(usersJSON, currentUserID)

        const maleUsers = filterUsersByGender(otherUsers, "male")
        const femaleUsers = filterUsersByGender(otherUsers, "female")

        dispatch(addUsers(otherUsers))
        dispatch(addMaleUsers(maleUsers))
        dispatch(addFemaleUsers(femaleUsers))
      });
  }
}

/////////////////////////////////////////
//___________HELPER METHODS____________//
/////////////////////////////////////////
const filterUsersByGender = (users, gender) => {
  return users.filter(user => user.gender.toLowerCase() === gender);
}
// Does not include the current user signed in
const filterOtherUsers = (users, currentUserID) => {
  return users.filter(user => user.id !== currentUserID);
}
