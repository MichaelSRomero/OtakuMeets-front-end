const initialState = {
  extraversion: 0,
  introversion: 0,
  sensing: 0,
  intuition: 0,
  thinking: 0,
  feeling: 0,
  judging: 0,
  perceiving: 0
}

// Keep track of the Users choices from each category via points;
// compare its values to decide which trait they are
const personalityReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default personalityReducer;
