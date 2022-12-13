import { createAction } from '@reduxjs/toolkit';
import { MatchType } from '../models/match.types';
import { PlayerTypes, PlayerWithToken } from '../models/player.types';
import { actionPlayerTypes } from './actionTypesPlayer';

export const loginActionCreator = createAction<any>(actionPlayerTypes.login);
// {player: PlayerTypes;
// token: string;}
export const logoutActionCreator = createAction<void>(actionPlayerTypes.logout);

export const updateAddActionCreator = createAction<Partial<MatchType>>(
    actionPlayerTypes.updateAdd
);
export const updateDeleteActionCreator = createAction<Partial<MatchType>>(
    actionPlayerTypes.updateDelete
);
export const deleteActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.delete
);
export const getOneActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.getOne
);
