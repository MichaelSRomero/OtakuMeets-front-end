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
    default:
      return state;
  }
}

export default quizReducer;
