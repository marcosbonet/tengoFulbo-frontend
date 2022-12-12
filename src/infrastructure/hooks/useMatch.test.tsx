import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useMatch } from '../hooks/useMatch';
import { MatchType, ProtoMatch } from '../models/match.types';
import { MatchReducer } from '../reducer/reducerMatch';
import { PlayerReducer } from '../reducer/reducerPlayer';
import { MatchRepo } from '../services/matchRepo';
import { PlayerRepo } from '../services/playerRepo';
import { rootState, rootStore } from '../store/store';
jest.mock('../services/matchRepo');
describe('Given the use Match hook', () => {
    beforeEach(() => {
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
        const newMockMatch: MatchType = {
            id: '123',
            places: 'boca',
            image: 'papa',
            date: '4 de diciembre',
            players: [],
        };
        const updateMockMatch: MatchType = {
            id: '443',
            places: 'peñarol',
            image: 'pepe',
            date: '5 de diciembre',
            players: [],
        };

        describe('when we use in a component', () => {
            interface Current {
                matches: Array<MatchType>;

                handleload: () => void;
                handleCreateMatch: (newMatch: ProtoMatch) => void;

                handleUpdateAddMatch: (idMatch: string) => void;
                handleUpdateDeleteMatch: (idMatch: MatchType) => void;
            }
            let current: Current;
            let appStore: rootStore;
            beforeEach(() => {
                const preloadedState: Partial<rootState> = {
                    matches: [],
                    player: {
                        isLogged: true,
                        player: null,
                        token: '',
                    },
                };

                const appStore = configureStore({
                    reducer: {
                        player: PlayerReducer,
                        matches: MatchReducer,
                    },
                    preloadedState,
                });
                const wrapper = ({ children }: { children: JSX.Element }) => (
                    <Provider store={appStore}>{children}</Provider>
                );
                ({
                    result: { current },
                } = renderHook(() => useMatch(), { wrapper }));
            });

            test('then if the hook call handleLoad, it call the repository for the initial data and dispatch an action for load the data in the state', () => {
                (MatchRepo.prototype.get as jest.Mock).mockResolvedValue([
                    mockMatch,
                ]);

                current.handleload();
                expect(MatchRepo.prototype.get).toHaveBeenCalled();
            });

            test('handleLoad error', async () => {
                const mockCLG = jest.spyOn(global.console, 'log');
                (MatchRepo.prototype.get as jest.Mock).mockRejectedValueOnce(
                    new Error()
                );
                await current.handleload();
                expect(mockCLG).toHaveBeenCalled();
                expect(MatchRepo.prototype.get).toHaveBeenCalled();
            });

            test('then if the hook call handleCreateMatch, it call the repository to add a new album and dispatch an action to add the matches to the state', () => {
                (MatchRepo.prototype.create as jest.Mock).mockResolvedValue(
                    newMockMatch
                );

                expect(current.matches).toEqual([]);
                current.handleCreateMatch(newMockMatch);
                expect(MatchRepo.prototype.create).toHaveBeenCalled();
            });

            test('handleCreateMatch error', () => {
                (MatchRepo.prototype.create as jest.Mock).mockRejectedValueOnce(
                    new Error()
                );
                current.handleCreateMatch(newMockMatch);
                expect(MatchRepo.prototype.create).toHaveBeenCalled();
            });

            test('then if the hook call handleUpdateAdd match, it call the repository to update a matches and dispatch an action to update the album in the state', () => {
                (PlayerRepo.prototype.updateadd as jest.Mock).mockResolvedValue(
                    updateMockMatch
                );

                expect(current.matches).toEqual([]);
                current.handleUpdateAddMatch(updateMockMatch.id);
                expect(PlayerRepo.prototype.updateadd).toHaveBeenCalled();
            });

            test('handleUpdate error', () => {
                (
                    PlayerRepo.prototype.updateadd as jest.Mock
                ).mockRejectedValueOnce(new Error());
                current.handleUpdateAddMatch(updateMockMatch.id);
                expect(PlayerRepo.prototype.updateadd).toHaveBeenCalled();
            });

            test('then if the hook call handleDelete, it call the repository to delete a album and dispatch an action to delete matches from state', () => {
                (
                    PlayerRepo.prototype.updatedelete as jest.Mock
                ).mockResolvedValue(undefined);

                expect(current.matches).toEqual([]);
                current.handleUpdateDeleteMatch(updateMockMatch);
                expect(PlayerRepo.prototype.updatedelete).toHaveBeenCalled();
            });

            test('handleDelete error', () => {
                (
                    PlayerRepo.prototype.updatedelete as jest.Mock
                ).mockRejectedValueOnce(new Error());
                current.handleUpdateDeleteMatch(updateMockMatch);
                expect(PlayerRepo.prototype.updatedelete).toHaveBeenCalled();
            });
        });
    });
});
