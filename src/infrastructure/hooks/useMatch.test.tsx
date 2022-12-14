import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { preloadedState } from '../../mock/mockstore';
import { useMatch } from '../hooks/useMatch';
import { MatchType, ProtoMatch } from '../models/match.types';
import { MatchReducer } from '../reducer/reducerMatch';
import { PlayerReducer } from '../reducer/reducerPlayer';
import { MatchRepo } from '../services/matchRepo';
import { PlayerRepo } from '../services/playerRepo';

jest.mock('../services/matchRepo');
describe('Given the hook useMatch()', () => {
    const protoMatch: ProtoMatch = {
        places: 'boca',
        image: 'papa',
        date: '4 de diciembre',
        players: [],
    };
    const mockMatch = {
        ...protoMatch,
        id: '1234',
    };

    const updateMockMatch: MatchType = {
        id: '443',
        places: 'peñarol',
        image: 'pepe',
        date: '5 de diciembre',
        players: [],
    };
    const mockStore = configureStore({
        reducer: {
            player: PlayerReducer,
            matches: MatchReducer,
        },

        preloadedState,
    });
    let result: {
        current: {
            matches: MatchType[];
            handleLoad: () => void;
            handleCreateMatch: (newMatch: ProtoMatch) => void;
            handleUpdateAddMatch: (idMatch: string) => Promise<void>;
            handleUpdateDeleteMatch: (idMatch: MatchType) => Promise<void>;
        };
    };

    beforeEach(() => {
        MatchRepo.prototype.get = jest.fn().mockResolvedValue(mockMatch);
        (MatchRepo.prototype.search as jest.Mock).mockResolvedValue([
            mockMatch,
        ]);
        MatchRepo.prototype.create = jest.fn().mockResolvedValue(mockMatch);
        PlayerRepo.prototype.updateadd = jest.fn().mockResolvedValue(mockMatch);
        PlayerRepo.prototype.updatedelete = jest.fn().mockResolvedValue({});

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useMatch(), { wrapper }));
    });

    describe('When we use the handleAdd(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleCreateMatch(mockMatch);
            });
            expect(result.current.matches.at(-1)).toEqual(mockMatch);
            //await waitFor(() => {
            expect(MatchRepo.prototype.create).toHaveBeenCalled();
            //});
        });
    });

    describe('When we use the handleUpdateAdd(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleUpdateAddMatch(updateMockMatch.id);
            });
            expect(result.current.matches.at(-1)).toEqual(mockMatch);
            expect(PlayerRepo.prototype.updateadd).toHaveBeenCalled();
        });
    });

    describe('When we use the handleDelete(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            await waitFor(() => {
                result.current.handleUpdateDeleteMatch(updateMockMatch);
            });
            expect(result.current.matches).toStrictEqual(mockMatch);
            expect(PlayerRepo.prototype.updatedelete).toHaveBeenCalled();
        });
    });
});
