/////////////////////////////////////////
//___________ACTION CREATORS___________//
/////////////////////////////////////////
export const addPointToTrait = (trait) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_POINT', payload: trait });
    return Promise.resolve();
  };
};
