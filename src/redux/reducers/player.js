import { PLAYER_LOGIN, PLAYER_NAME, PLAYER_IMAGE } from '../actions';

const INITIAL_STATE = {
  email: '',
  playerName: '',
  score: '',
  image: '',
}

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PLAYER_LOGIN:
    return {
      ...state,
      email: payload,
    };
    case PLAYER_NAME:
      return {
        ...state,
        playerName: payload,
      };
    case PLAYER_IMAGE:
      return {
        ...state,
        image: payload,
      };
    default: 
    return state;
  }
}

export default player;
