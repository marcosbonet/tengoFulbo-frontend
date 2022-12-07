import { createReducer } from '@reduxjs/toolkit';

import * as ac from './actionCreatorPlayer';

const initialState: {
    isLogged: boolean;
    playerName: string;
    password: string;
    token: string;
} = {
    isLogged: false,
    playerName: '',
    password: '',
    token: '',
};

export const PlayerReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        token: action.payload || '',
        loginActionCreator: !!action.payload,
        playerName: action.payload,
        password: action.payload,
    }));
    builder.addCase(ac.logoutActionCreator, (state) => ({
        ...state,
        token: '',
        logoutActionCreator: false,
    }));

    builder.addDefaultCase((state) => state);
});
