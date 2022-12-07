import { createAction } from '@reduxjs/toolkit';
import { MatchTypes } from '../models/match.types';
import { actionMatchTypes } from './actionTypesMatch';

export const createActionCreator = createAction<MatchTypes>(
    actionMatchTypes.create
);
export const updateActionCreator = createAction<MatchTypes>(
    actionMatchTypes.update
);

export const loadActionCreator = createAction<Array<MatchTypes>>(
    actionMatchTypes.load
);
export const deleteActionCreator = createAction<MatchTypes>(
    actionMatchTypes.delete
);
export const selectActionCreator = createAction<MatchTypes>(
    actionMatchTypes.select
);
