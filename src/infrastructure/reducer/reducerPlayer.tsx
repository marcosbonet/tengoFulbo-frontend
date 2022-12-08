import { createReducer } from '@reduxjs/toolkit';
import { PlayerTypes } from '../models/player.types';

import * as ac from './actionCreatorPlayer';

const initialState: {
    isLogged: boolean;
    player: PlayerTypes | null;
    token: string | null;
} = {
    isLogged: false,
    player: null,
    token: null,
};

export const PlayerReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        token: action.payload.token,
        player: action.payload.player,
    }));
    builder.addCase(ac.logoutActionCreator, (state) => ({
        ...state,
        token: null,
        isLogged: false,
        player: null,
    }));

    builder.addCase(ac.updateAddActionCreator, (state, action) => ({
        ...state,
        player: {
            ...state.player,
            matches: [...(state.player as PlayerTypes).matches],
        } as PlayerTypes,
    }));
    builder.addCase(ac.updateDeleteActionCreator, (state, action) => ({
        ...state,
        player: {
            ...state.player,
            matches: (state.player as PlayerTypes).matches.filter(
                (match) => match.id !== action.payload.id
            ),
        } as PlayerTypes,
        // ...state.filter((item) =>
        //     item.id === action.payload.id ? action.payload : item
        // ),
    }));

    builder.addDefaultCase((state) => state);
});
