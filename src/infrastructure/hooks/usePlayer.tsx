import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorPlayer';

import { PlayerRepo } from '../services/playerRepo';
import { PlayerTypes, ProtoPlayer } from '../models/player.types';

import { MatchRepo } from '../services/matchRepo';

export const usePlayer = () => {
    const player = useSelector((state: rootState) => state.player);
    const dispatcher = useDispatch();
    const apiPlayer = useMemo(() => new PlayerRepo(), []);
    const apiMatch = useMemo(() => new MatchRepo(), []);

    const handleLogin = (data: ProtoPlayer) =>
        apiPlayer
            .login(data)
            .then((response) => dispatcher(ac.loginActionCreator(response)))
            .catch((error: Error) => console.log(error.name, error.message));

    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
        localStorage.clear();
    };
    const handleDelete = (player: PlayerTypes) => {
        apiPlayer
            .delete(player.id)
            .then(() => dispatcher(ac.logoutActionCreator()));
        localStorage.clear();
    };

    const handleUpdateAddMatch = (updateMatch: PlayerTypes) => {
        apiMatch
            .updateadd(updateMatch.id)
            .then(() => dispatcher(ac.updateAddActionCreator(updateMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdateDeleteMatch = (updateMatch: PlayerTypes) => {
        apiMatch
            .updateadd(updateMatch.id)
            .then(() => dispatcher(ac.updateDeleteActionCreator(updateMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        player,
        handleLogin,
        handleLogout,
        handleDelete,
        handleUpdateAddMatch,
        handleUpdateDeleteMatch,
    };
};
