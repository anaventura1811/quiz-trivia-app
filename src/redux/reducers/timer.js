import { START_TIMER, STOP_TIMER, TICK } from '../actions';


const INITIAL_STATE = {
  seconds: 0,
  start_time: 0,
  status: 'paused',
  decrement_interval: 0,
}

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_TIMER:
    return {
      ...state,
      start_time: action.start_time,
      seconds: action.start_time,
      status: 'counting_down',
    };
  case STOP_TIMER:
    return {
      ...state,
      status: 'paused',
    }
  case TICK:
    return {
      ...state,
      seconds: action.seconds - 1,
    };
    default:
      return state;
  }
}

export default timer;
