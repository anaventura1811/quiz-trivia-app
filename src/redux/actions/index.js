export const PLAYER_LOGIN = 'PLAYER_LOGIN';
// export const PLAYER_NAME = 'PLAYER_NAME';
// export const PLAYER_IMAGE = 'PLAYER_IMAGE';
export const SCORE_ADD = 'SCORE_ADD';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK = 'TICK';

export const loginAction = (payload) => ({ type: PLAYER_LOGIN, payload });
// export const userNameAction = (payload) => ({ type: PLAYER_NAME, payload });
// export const userImage = (payload) => ({ type: PLAYER_IMAGE, payload });
export const startTimerAction = () => ({ type: START_TIMER });
export const stopTimerAction = () => ({ type: STOP_TIMER });
export const tickTimerAction = () => ({ type: TICK });
