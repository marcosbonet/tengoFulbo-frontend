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

    builder.addDefaultCase((state) => state);
});
