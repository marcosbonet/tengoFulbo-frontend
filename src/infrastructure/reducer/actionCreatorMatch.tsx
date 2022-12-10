import { createAction } from '@reduxjs/toolkit';
import { MatchType } from '../models/match.types';
import { actionMatchType } from './actionTypesMatch';

export const createActionCreator = createAction<MatchType>(
    actionMatchType.create
);

export const loadActionCreator = createAction<Array<MatchType>>(
    actionMatchType.load
);
export const updateAddActionCreator = createAction<MatchType>(
    actionMatchType.updateAdd
);
export const updateDeleteActionCreator = createAction<MatchType>(
    actionMatchType.updateDelete
);
