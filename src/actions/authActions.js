/////////////////////////////////////////
//___________ACTION CREATORS___________//
/////////////////////////////////////////
const createUser = (newUser) => ({ type: 'SIGN_UP', payload: newUser });
const logInUser = (existingUser) => ({ type: 'LOG_IN', payload: existingUser });
const addCharacter = (character) => ({ type: 'ADD_CHARACTER', payload: character });
const addNewMatch = (user) => ({ type: 'ADD_NEW_MATCH', payload: user });
const addNewMessage = (existingConversation) => ({ type: 'ADD_NEW_MESSAGE', payload: existingConversation });
const addNewConversation = (conversation) => ({ type: 'ADD_NEW_CONVERSATION', payload: conversation });
export const logOutUser = () => ({ type: 'LOG_OUT' });
export const saveToken = (token) => ({ type: 'SAVE_TOKEN', payload: token });

/////////////////////////////////////////
//___________THUNK CREATORS____________//
/////////////////////////////////////////
export const signUp = (newUserState, push) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user: newUserState }),
    }).then((res) => res.json())
      .then((userJSON) => {
        if (userJSON.jwt) {
          dispatch(createUser(userJSON));
          dispatch(saveToken(userJSON.jwt));
          localStorage.setItem('jwt', userJSON.jwt);

          push('/quiz-splash');
        } else {
          console.log('ERRORS: ', userJSON);
        }
      });
  };
};

export const logIn = (userObj, push) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...userObj }),
    }).then((res) => res.json())
      .then((userJSON) => {
        if (userJSON.jwt) {
          dispatch(logInUser(userJSON.user));
          dispatch(saveToken(userJSON.jwt));
          localStorage.setItem('jwt', userJSON.jwt);

          // PUSH EXISTING USER TO REGULAR PAGE
          push('/home');
        } else {
          console.log('ERRORS: ', userJSON);
        }
      });
  };
};

export const addCharacterToUser = (user, personalityType) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ personality: personalityType, gender: user.gender }),
    }).then((res) => res.json())
      .then((updatedUser) => {
        const { character } = updatedUser;
        const randomIndex = Math.floor(Math.random() * character.avatar_urls.length);

        dispatch(addCharacter(
          {
            ...character,
            avatar_urls: character.avatar_urls[randomIndex],
          },
        ));

        return Promise.resolve();
      });
  };
};

export const createMatch = (currentUserID, user) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        matcher_id: currentUserID,
        matchee_id: user.id,
      }),
    }).then((res) => res.json())
      .then((matchObj) => {
        if (matchObj.mutual_match) {
          dispatch(addNewMatch(user));
        }
      });
  };
};

export const createConversation = (currentUserID, matchedUser, textMessage) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_a_id: currentUserID,
        user_b_id: matchedUser.id,
        content: textMessage,
      }),
    }).then((res) => res.json())
      .then((conversationJSON) => {
        const convoObj = {
          id: conversationJSON.id,
          user: conversationJSON.recipient,
          messages: conversationJSON.messages,
        };
        dispatch(addNewConversation(convoObj));
        return Promise.resolve(convoObj);
      });
  };
};

export const createMessage = (currentUserID, conversation, textMessage) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: currentUserID,
        conversation_id: conversation.id,
        content: textMessage,
      }),
    }).then((res) => res.json())
      .then((messageJSON) => {
        const updatedMessages = [...conversation.messages, messageJSON];
        const updatedConversation = { ...conversation, messages: updatedMessages };

        dispatch(addNewMessage(updatedConversation));
        return Promise.resolve(updatedConversation);
      });
  };
};
