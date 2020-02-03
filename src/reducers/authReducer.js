const initialState = {
  id: '',
  username: '',
  gender: '',
  preference: '',
  token: '',
  character: {},
  matches: [],
  conversations: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER': {
      return { ...state, character: action.payload };
    }
    case 'ADD_NEW_MATCH': {
      const newMatches = [action.payload, ...state.matches];

      return {
        ...state,
        matches: newMatches,
      };
    }
    case 'ADD_NEW_MESSAGE': {
      const updatedConversationList = state.conversations.map((conversation) => {
        return conversation.id === action.payload.id ? action.payload : conversation;
      });

      return {
        ...state,
        conversations: updatedConversationList,
      };
    }
    case 'ADD_NEW_CONVERSATION': {
      const newConversationList = [...state.conversations, action.payload];

      return {
        ...state,
        conversations: newConversationList,
      };
    }
    case 'SAVE_TOKEN': {
      return { ...state, token: action.payload };
    }
    case 'SIGN_UP': {
      const userID = action.payload.user.id;
      const { username } = action.payload.user;
      const { gender } = action.payload.user;
      const { preference } = action.payload.user;

      return {
        ...state, id: userID, username, gender, preference,
      };
    }
    case 'LOG_IN': {
      const existingUser = action.payload;

      return {
        ...state,
        id: existingUser.id,
        username: existingUser.username,
        preference: existingUser.preference,
        character: existingUser.character,
        matches: existingUser.confirmed_matches,
        conversations: existingUser.conversations,
      };
    }
    case 'LOG_OUT': {
      localStorage.clear();
      return {
        ...state,
        id: '',
        username: '',
        token: '',
        preference: '',
        character: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
