import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MatchRepo } from '../services/matchRepo';
import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorMatch';
import { MatchTypes, ProtoMatch } from '../models/match.types';

export const useMatch = () => {
    const matches = useSelector((state: rootState) => state.matches);
    console.log(matches, '2');
    const dispatcher = useDispatch();
    const apiMatch = useMemo(() => new MatchRepo(), []);
    const handleGetMatch = useCallback(
        () =>
            apiMatch
                .get()
                .then((matches) => dispatcher(ac.loadActionCreator(matches)))
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiMatch, dispatcher]
    );
    const handleCreateMatch = (newMatch: ProtoMatch) => {
        apiMatch
            .create(newMatch)
            .then((matches) => dispatcher(ac.createActionCreator(matches)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdateAddMatch = (updateMatch: MatchTypes) => {
        apiMatch
            .updateadd(updateMatch.id)
            .then(() => dispatcher(ac.updateAddActionCreator(updateMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdateDeleteMatch = (updateMatch: MatchTypes) => {
        apiMatch
            .updateadd(updateMatch.id)
            .then(() => dispatcher(ac.updateDeleteActionCreator(updateMatch)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        matches,
        handleGetMatch,
        handleCreateMatch,
        handleUpdateAddMatch,
        handleUpdateDeleteMatch,
    };
};
