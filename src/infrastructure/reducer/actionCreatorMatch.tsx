import { createAction } from '@reduxjs/toolkit';
import { MatchTypes } from '../models/match.types';
import { actionMatchTypes } from './actionTypesMatch';

export const createActionCreator = createAction<MatchTypes>(
    actionMatchTypes.create
);

export const loadActionCreator = createAction<Array<MatchTypes>>(
    actionMatchTypes.load
);
