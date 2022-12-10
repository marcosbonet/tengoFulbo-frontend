import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useMatch } from '../hooks/useMatch';
import { MatchType, ProtoMatch } from '../models/match.types';
import { MatchRepo } from '../services/matchRepo';
import { appStore } from '../store/store';
jest.mock('../services/matchRepo');
const mockMatch: MatchType = {
    id: '1234',
    places: 'river',
    image: 'papa',
    date: '3 de diciembre',
    players: [],
};
const newMockMatch: MatchType = {
    id: '123',
    places: 'boca',
    image: 'papa',
    date: '4 de diciembre',
    players: [],
};
describe('Given the use Match hook', () => {
    let result: {
        current: {
            matches: Array<MatchType>;
            handleCreateMatch: (newMatch: ProtoMatch) => void;
        };
    };
    beforeEach(() => {
        (MatchRepo.prototype.get as jest.Mock).mockResolvedValue([mockMatch]);
        (MatchRepo.prototype.create as jest.Mock).mockResolvedValue(
            newMockMatch
        );
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useMatch(), { wrapper }));
    });
    describe('When it has been run HandleCreateMatch and it has called handleCreateMatch', () => {
        test('Then should return a Promise of product', async () => {
            await waitFor(() => {
                result.current.handleCreateMatch(mockMatch);
                expect(result.current.matches.at(-1)).toEqual(mockMatch);
            });
        });
        test('Then should return an error', async () => {
            const error = new Error('');
            MatchRepo.prototype.create = jest.fn().mockRejectedValue(mockMatch);
            await waitFor(() => {
                result.current.handleCreateMatch(mockMatch);
                expect(error).toBeInstanceOf(Error);
            });
        });
    });
});
