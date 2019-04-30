const initialState = {
  extraversion: [],
  introversion: [],
  sensing: [],
  intuition: [],
  thinking: [],
  feeling: [],
  judging: [],
  perceiving: []
}

const quizReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TRAITS':
      const traitsArray = action.payload
      
      return {
        ...initialState,
        extraversion: traitsArray[0],
        introversion: traitsArray[1],
        sensing: traitsArray[2],
        intuition: traitsArray[3],
        thinking: traitsArray[4],
        feeling: traitsArray[5],
        judging: traitsArray[6],
        perceiving: traitsArray[7]
      }
    default:
      return state;
  }
}

export default quizReducer;
