import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MatchRepo } from '../services/matchRepo';
import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorMatch';
import { ProtoMatch } from '../models/match.types';
import { PlayerRepo } from '../services/playerRepo';

export const useMatch = () => {
    const matches = useSelector((state: rootState) => state.matches);

    const dispatcher = useDispatch();
    const apiMatch = useMemo(() => new MatchRepo(), []);
    const apiPlayer = useMemo(() => new PlayerRepo(), []);
    useEffect(() => {
        apiMatch
            .get()
            .then((response) => dispatcher(ac.loadActionCreator(response)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiMatch, dispatcher]);

    const handleCreateMatch = (newMatch: ProtoMatch) => {
        apiMatch
            .create(newMatch)
            .then((matches) => dispatcher(ac.createActionCreator(matches)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdateAddMatch = async (idMatch: string) => {
        await apiPlayer
            .updateadd(idMatch)
            .then((matchUpdated) =>
                dispatcher(ac.updateAddActionCreator(matchUpdated))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    // const handleUpdateDeleteMatch = async (id: string) => {
    //     await apiPlayer
    //         .updatedelete(id)
    //         .then(() => dispatcher(ac.updateDeleteActionCreator()))
    //         .catch((error: Error) => console.log(error.name, error.message));
    // };

    return {
        matches,
        handleCreateMatch,
        handleUpdateAddMatch,
        //handleUpdateDeleteMatch,
    };
};
