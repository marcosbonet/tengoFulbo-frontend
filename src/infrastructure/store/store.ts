import { configureStore } from '@reduxjs/toolkit';

import { MatchReducer } from '../reducer/reducerMatch';
import { PlayerReducer } from '../reducer/reducerPlayer';

export const appStore = configureStore({
    reducer: {
        matches: MatchReducer,
        player: PlayerReducer,
    },
});

export type AppDispatch = typeof appStore.dispatch;

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
