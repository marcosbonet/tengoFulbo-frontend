import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MatchRepo } from '../services/matchRepo';
import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreatorMatch';
import { ProtoMatch } from '../models/match.types';

export const useMatch = () => {
    const matches = useSelector((state: rootState) => state.matches);
    console.log(matches, '2');
    const dispatcher = useDispatch();
    const apiMatch = useMemo(() => new MatchRepo(), []);
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

    return {
        matches,
        handleCreateMatch,
    };
};
