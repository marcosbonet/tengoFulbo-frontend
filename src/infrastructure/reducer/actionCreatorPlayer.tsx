import { createAction } from '@reduxjs/toolkit';
import { PlayerTypes, PlayerWithToken } from '../models/player.types';
import { actionPlayerTypes } from './actionTypesPlayer';

export const startLoginActionCreator = createAction<void>(
    actionPlayerTypes.startLogin
);
export const loginActionCreator = createAction<PlayerWithToken>(
    actionPlayerTypes.login
);
// {player: PlayerTypes;
// token: string;}
export const logoutActionCreator = createAction<void>(actionPlayerTypes.logout);
export const updateAddActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.updateAdd
);
export const updateDeleteActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.updateDelete
);
export const deleteActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.delete
);
