/////////////////////////////////////////
//___________ACTION CREATORS___________//
/////////////////////////////////////////
const addTraits = (traits) => ({ type: 'ADD_TRAITS', payload: traits });

/////////////////////////////////////////
//___________THUNK CREATORS____________//
/////////////////////////////////////////
export const getTraits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/traits')
      .then((res) => res.json())
      .then((traitsJSON) => {
        dispatch(addTraits(traitsJSON));
      });
  };
};
