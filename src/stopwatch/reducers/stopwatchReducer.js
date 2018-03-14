import {
    START_TIMER,
    PAUSE_TIMER,
    RESET_TIMER,
    LAP_TIMER
} from '../actions/types';

const initialState = {
    title: 'Stopwatch',
    intervalId: null,
    min: '00',
    sec: '00',
    ms: '00',
    startPauseButtonText: 'Start',
    isStarted: false,
    hasStarted: false,
    nextLapId: 0,
    laps: []
};

// let intervalId = null;

const stopwatchReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return startPause(state);
        case PAUSE_TIMER:
            return { ...state, isStarted: false };
        case RESET_TIMER:
            return { ...initialState };
        case LAP_TIMER:
            return createLap(state);
        default:
            return state;
    }
};

const startPause = state => {
    let msNum = Number.parseInt(state.ms, 10);
    let secNum = Number.parseInt(state.sec, 10);
    let minNum = Number.parseInt(state.min, 10);

    if (msNum < 99) {
        msNum++;
    } else {
        msNum = 0;
        if (secNum < 59) {
            secNum++;
        } else {
            secNum = 0;
            if (minNum < 59) {
                minNum++;
            } else {
                minNum = 0;
            }
        }
    }

    let msStr = msNum.toString();
    let secStr = secNum.toString();
    let minStr = minNum.toString();

    if (msNum < 10) {
        msStr = `0${msStr}`;
    }
    if (secNum < 10) {
        secStr = `0${secStr}`;
    }
    if (minNum < 10) {
        minStr = `0${minStr}`;
    }
    
    return { ...state, ms: msStr, sec: secStr, min: minStr, isStarted: true, hasStarted: true };
};

const createLap = state => {
    const lap = `${state.min}:${state.sec}:${state.ms}`;
    return { 
        ...state, 
        laps: [...state.laps, { key: state.nextLapId, value: lap }], 
        nextLapId: state.nextLapId + 1 
    };
};

export default stopwatchReducer;
