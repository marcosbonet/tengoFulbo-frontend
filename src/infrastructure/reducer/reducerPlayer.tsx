import { createReducer } from '@reduxjs/toolkit';
import { isAwaitExpression } from 'typescript';
import { PlayerTypes } from '../models/player.types';

import * as ac from './actionCreatorPlayer';
import { actionMatchType } from './actionTypesMatch';

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

    builder.addCase(ac.logoutActionCreator, (state, _action) => ({
        ...state,

        isLogged: false,
        player: null,
        token: null,
    }));

    builder.addCase(ac.updateAddActionCreator, (state, action) => ({
        ...state,
        player: {
            ...state.player,
            matches: [...(state.player as PlayerTypes).matches, action.payload],
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
    }));

    builder.addCase(ac.getOneActionCreator, (_state, action) => ({
        ..._state,
        player: action.payload,
    }));

    builder.addDefaultCase((state) => state);
});
