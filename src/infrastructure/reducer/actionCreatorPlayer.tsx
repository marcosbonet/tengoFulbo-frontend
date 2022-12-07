import { createAction } from '@reduxjs/toolkit';
import { PlayerTypes } from '../models/player.types';
import { actionPlayerTypes } from './actionTypesPlayer';

export const startLoginActionCreator = createAction<void>(
    actionPlayerTypes.startLogin
);
export const loginActionCreator = createAction<string>(actionPlayerTypes.login);
// {player: PlayerTypes;
// token: string;}
export const logoutActionCreator = createAction(actionPlayerTypes.logout);
export const updateActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.updateAdd
);
export const updatedeleteActionCreator = createAction<PlayerTypes>(
    actionPlayerTypes.updatedelete
);
