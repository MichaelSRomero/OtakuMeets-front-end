const initialState = {
  extraversion: {score: 0, symbol: 'E'},
  introversion: {score: 0, symbol: 'I'},
  sensing: {score: 0, symbol: 'S'},
  intuition: {score: 0, symbol: 'N'},
  thinking: {score: 0, symbol: 'T'},
  feeling: {score:0, symbol: 'F'},
  judging: {score: 0, symbol: 'J'},
  perceiving: {score: 0, symbol: 'P'}
}

// Keep track of the Users choices from each category via points;
// compare its values to decide which trait they are
const personalityReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_POINT":
      let trait = action.payload.toLowerCase()

      return {
        ...state,
        [trait]: {
          ...state[trait],
          score: state[trait].score + 1
        }
      }
    default:
      return state;
  }
}

export default personalityReducer;
