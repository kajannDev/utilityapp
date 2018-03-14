import {
    START_TIMER,
    PAUSE_TIMER,
    RESET_TIMER,
    LAP_TIMER
} from './types';

let intervalId = null;

const startTimerInternal = () => ({ type: START_TIMER });
const pauseTimerInternal = () => ({ type: PAUSE_TIMER });
const resetTimerInternal = () => ({ type: RESET_TIMER });
const lapTimerInternal = () => ({ type: LAP_TIMER });

export const startTimer = () => dispatch => {
    console.log('StartTimer');
    clearInterval(intervalId);
    intervalId = setInterval(() => dispatch(startTimerInternal()), 100);
    dispatch(startTimerInternal());
};

export const pauseTimer = () => dispatch => {
    console.log('pauseTimer');
    clearInterval(intervalId);
    dispatch(pauseTimerInternal());
};

export const resetTimer = () => dispatch => {
    console.log('resetTimer');
    clearInterval(intervalId);
    dispatch(resetTimerInternal());
};

export const lapTimer = () => dispatch => {
    console.log('lapTimer');
    dispatch(lapTimerInternal());
};
