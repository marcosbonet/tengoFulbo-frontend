import { createReducer } from '@reduxjs/toolkit';

import { MatchTypes } from '../models/match.types';
import * as ac from './actionCreatorMatch';

const initialState: {
    matches: Array<MatchTypes>;
    actualMatch?: MatchTypes | null;
} = {
    matches: [],
    actualMatch: null,
};

export const MatchReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (state, action) => ({
        ...state,
        matches: action.payload,
    }));
    builder.addCase(ac.createActionCreator, (state, action) => ({
        ...state,
        matches: [...state.matches, action.payload],
    }));
    builder.addCase(ac.deleteActionCreator, (state, action) => ({
        ...state,
        matches: [
            ...state.matches.filter((item) =>
                item.id === action.payload.id ? action.payload : item
            ),
        ],
    }));

    builder.addCase(ac.updateActionCreator, (state, action) => ({
        ...state,
        matches: [
            ...state.matches.map((item) =>
                item.id === action.payload.id ? action.payload : item
            ),
        ],
    }));

    builder.addDefaultCase((state) => state);
});
