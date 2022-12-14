import { createReducer } from '@reduxjs/toolkit';

import { MatchType } from '../models/match.types';
import * as ac from './actionCreatorMatch';

const initialState: Array<MatchType> = [];

export const MatchReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.createActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateDeleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    builder.addCase(ac.updateAddMatchctionCreator, (state, action) =>
        state.map((item) => (item = action.payload))
    );

    builder.addDefaultCase((state) => state);
});
