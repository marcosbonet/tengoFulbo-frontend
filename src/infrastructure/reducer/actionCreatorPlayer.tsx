import { createAction } from '@reduxjs/toolkit';
import { MatchType } from '../models/match.types';
import { PlayerTypes, PlayerWithToken } from '../models/player.types';
import { actionPlayerTypes } from './actionTypesPlayer';

export const loginActionCreator = createAction<{
    player: PlayerTypes;
    token: string;
}>(actionPlayerTypes.login);

export const logoutActionCreator = createAction<void>(actionPlayerTypes.logout);

export const updateAddActionCreator = createAction<MatchType>(
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
