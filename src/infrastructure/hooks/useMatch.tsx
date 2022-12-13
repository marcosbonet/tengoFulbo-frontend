import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MatchRepo } from '../services/matchRepo';
import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorMatch';
import { MatchType, ProtoMatch } from '../models/match.types';
import { PlayerRepo } from '../services/playerRepo';

export const useMatch = () => {
    const matches = useSelector((state: rootState) => state.matches);

    const dispatcher = useDispatch();
    const apiMatch = useMemo(() => new MatchRepo(), []);
    const apiPlayer = useMemo(() => new PlayerRepo(), []);

    const handleLoad = useCallback(() => {
        apiMatch
            .get()
            .then((response) => {
                dispatcher(ac.loadActionCreator(response));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiMatch, dispatcher]);

    const handleCreateMatch = (newMatch: ProtoMatch) => {
        apiMatch
            .create(newMatch)
            .then((matches) => dispatcher(ac.createActionCreator(matches)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdateAddMatch = async (idMatch: string) => {
        console.log('2');
        await apiPlayer
            .updateadd(idMatch)
            .then((matchUpdated) => {
                dispatcher(ac.updateAddActionCreator(matchUpdated));
                handleLoad()
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdateDeleteMatch = async (idMatch: MatchType) => {
        await apiPlayer
            .updatedelete(idMatch.id)
            .then(() => dispatcher(ac.updateDeleteActionCreator(idMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        matches,
        handleLoad,
        handleCreateMatch,
        handleUpdateAddMatch,
        handleUpdateDeleteMatch,
    };
};
