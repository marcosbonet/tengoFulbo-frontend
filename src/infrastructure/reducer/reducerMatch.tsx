import { createReducer } from '@reduxjs/toolkit';

import { MatchTypes } from '../models/match.types';
import * as ac from './actionCreatorMatch';

const initialState: Array<MatchTypes> = [];

export const MatchReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.createActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.deleteActionCreator, (state, action) => ({
        ...state.filter((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));

    builder.addCase(ac.updateAddActionCreator, (state, action) => ({
        ...state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));
    builder.addCase(ac.updateDeleteActionCreator, (state, action) => ({
        ...state.filter((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));

    builder.addDefaultCase((state) => state);
});
