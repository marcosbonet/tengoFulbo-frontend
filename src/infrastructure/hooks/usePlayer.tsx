import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorPlayer';

import { PlayerRepo } from '../services/playerRepo';
import { PlayerTypes, ProtoPlayer } from '../models/player.types';

import { MatchType } from '../models/match.types';

export const usePlayer = () => {
    const player = useSelector((state: rootState) => state.player);
    const dispatcher = useDispatch();
    const apiPlayer = useMemo(() => new PlayerRepo(), []);

    const handleLogin = async (data: ProtoPlayer) => {
        await apiPlayer
            .login(data)
            .then((response) => dispatcher(ac.loginActionCreator(response)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleLogout = async () => {
        dispatcher(ac.logoutActionCreator());
        localStorage.clear();
    };
    const handleDelete = async (player: PlayerTypes) => {
        await apiPlayer
            .delete(player.id)
            .then(() => dispatcher(ac.logoutActionCreator()));
        localStorage.clear();
    };

    const handleUpdateAddPlayer = async (idMatch: string) => {
        await apiPlayer
            .updateadd(idMatch)
            .then((matchUpdated) =>
                dispatcher(ac.updateAddActionCreator(matchUpdated))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdateDeletePlayer = async (
        id: string,
        updateMatch: Partial<MatchType>
    ) => {
        await apiPlayer
            .updatedelete(id)
            .then(() => dispatcher(ac.updateDeleteActionCreator(updateMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        player,
        handleLogin,
        handleLogout,
        handleDelete,
        handleUpdateAddPlayer,
        handleUpdateDeletePlayer,
    };
};
