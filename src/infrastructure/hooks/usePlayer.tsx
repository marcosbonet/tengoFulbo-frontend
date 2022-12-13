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
            .then((response) => {
                console.log(response);
                dispatcher(ac.loginActionCreator(response));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleLogout = async () => {
        dispatcher(ac.logoutActionCreator());
        localStorage.clear();
    };
    const handleDelete = async (player: PlayerTypes) => {
        await apiPlayer
            .delete()
            .then(() => dispatcher(ac.deleteActionCreator(player)))
            .then(() => dispatcher(ac.logoutActionCreator()));
        localStorage.clear();
    };

    const handleUpdateAddPlayer = async (idMatch: string) => {
        console.log('3');
        await apiPlayer
            .updateadd(idMatch)
            .then((matchUpdated) =>
                dispatcher(ac.updateAddActionCreator(matchUpdated))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdateDeletePlayer = async (idMatch: MatchType) => {
        await apiPlayer
            .updatedelete(idMatch.id)
            .then(() => dispatcher(ac.updateDeleteActionCreator(idMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleGetOne = async () => {
        await apiPlayer
            .getOne()
            .then((player) => dispatcher(ac.getOneActionCreator(player)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        player,
        handleLogin,
        handleLogout,
        handleDelete,
        handleGetOne,
        handleUpdateAddPlayer,
        handleUpdateDeletePlayer,
    };
};
