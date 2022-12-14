import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { usePlayer } from '../hooks/usePlayer';
import { MatchType } from '../models/match.types';
import { PlayerTypes, ProtoPlayer } from '../models/player.types';
import { PlayerReducer } from '../reducer/reducerPlayer';
import { PlayerRepo } from '../services/playerRepo';
import { configureStore } from '@reduxjs/toolkit';

import { rootState } from '../store/store';
import { MatchReducer } from '../reducer/reducerMatch';
import { mockStore } from '../../mock/mockstore';
jest.mock('../services/PlayerRepo');

const mockPlayer: PlayerTypes = {
    id: '1234',
    playerName: 'Robert',
    password: 'robert@live.com',
    email: '3 de diciembre',
    matches: [],
};
const mockMatch: MatchType = {
    id: '1234',
    places: 'river',
    image: 'papa',
    date: '3 de diciembre',
    players: [],
};

const newMockPlayer: PlayerTypes = {
    id: '2345',
    playerName: 'Jhon',
    password: 'papa',
    email: 'jhon@live.com',
    matches: [],
};
const preloadedState: Partial<rootState> = {
    player: {
        isLogged: true,

        player: mockPlayer,
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

let result: {
    current: {
        player: {
            isLogged: boolean;

            player: PlayerTypes | null;
            token: string | null;
        };
        handleLogin: (data: ProtoPlayer) => Promise<void>;
        handleLogout: () => Promise<void>;
        handleDelete: (player: PlayerTypes) => Promise<void>;
        handleUpdateAddPlayer: (idMatch: string) => Promise<void>;
        handleUpdateDeletePlayer: (idMatch: MatchType) => Promise<void>;
        handleGetOne: () => Promise<void>;
    };
};

beforeEach(() => {
    (PlayerRepo.prototype.login as jest.Mock).mockResolvedValue(mockPlayer);
    (PlayerRepo.prototype.register as jest.Mock).mockResolvedValue(mockPlayer);
    (PlayerRepo.prototype.updateadd as jest.Mock).mockResolvedValue([
        { ...mockPlayer, image: 'new img' },
    ]);
    (PlayerRepo.prototype.updatedelete as jest.Mock).mockResolvedValue(
        mockPlayer
    );
    (PlayerRepo.prototype.getOne as jest.Mock).mockResolvedValue(mockPlayer);

    (PlayerRepo.prototype.delete as jest.Mock).mockResolvedValue(newMockPlayer);
    const wrapper = ({ children }: { children: JSX.Element }) => (
        <Provider store={appStore}>{children}</Provider>
    );
    ({ result } = renderHook(() => usePlayer(), { wrapper }));
});

describe('Given the use Player hook', () => {
    test('if we use HandleLogin should add a new item to the array of player', async () => {
        result.current.handleLogin({
            playerName: mockPlayer.playerName,
        });
        expect(PlayerRepo.prototype.login).toHaveBeenCalled();
    });
});
test('Then should return an error', async () => {
    const error = new Error('');
    PlayerRepo.prototype.login = jest.fn().mockRejectedValue(mockPlayer);
    await waitFor(() => {
        result.current.handleLogin({
            playerName: 'pepe',
            password: 'perejil',
        });
        expect(error).toBeInstanceOf(Error);
    });
});
test('if we use Handledelete should change the match of a user from the array of player', async () => {
    await waitFor(() => {
        result.current.handleDelete(mockPlayer);
        expect(PlayerRepo.prototype.delete).toHaveBeenCalled();
    });
});
test('Then it should return updateAdd have been called', () => {
    result.current.handleUpdateAddPlayer('1');
    expect(PlayerRepo.prototype.updateadd).toHaveBeenCalled();
});
test('Then it should return UpdateDelete have been called', () => {
    result.current.handleUpdateDeletePlayer(mockMatch);
    expect(PlayerRepo.prototype.updatedelete).toHaveBeenCalled();
});

test('Then handleadd should return an error', async () => {
    const error = new Error('');
    PlayerRepo.prototype.updateadd = jest.fn().mockRejectedValue(mockPlayer);
    await waitFor(() => {
        result.current.handleUpdateAddPlayer(mockMatch.id);
        expect(error).toBeInstanceOf(Error);
    });
});

test('Then handledelete should return an error', async () => {
    const error = new Error('');
    PlayerRepo.prototype.updatedelete = jest.fn().mockRejectedValue(mockMatch);
    await waitFor(() => {
        result.current.handleUpdateDeletePlayer(mockMatch);
        expect(error).toBeInstanceOf(Error);
    });
});
describe('When we use the handleLogout(),', () => {
    let spyDispatch: jest.SpyInstance;

    beforeEach(() => {
        PlayerRepo.prototype.login = jest.fn().mockResolvedValue(mockPlayer);
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );
        spyDispatch = jest.spyOn(mockStore, 'dispatch');
        ({ result } = renderHook(() => usePlayer(), { wrapper }));
    });

    test('Then it should return mockUser and have been called', async () => {
        await waitFor(() => {
            result.current.handleLogout();
        });
        expect(spyDispatch).toHaveBeenCalled();
    });
});
describe('When we use the getOne(),', () => {
    let spyDispatch: jest.SpyInstance;

    beforeEach(() => {
        PlayerRepo.prototype.getOne = jest.fn().mockResolvedValue(mockPlayer);
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );
        spyDispatch = jest.spyOn(mockStore, 'dispatch');
        ({ result } = renderHook(() => usePlayer(), { wrapper }));
    });

    test('Then it should return mockUser and have been called', async () => {
        await waitFor(() => {
            result.current.handleGetOne();
        });
        expect(spyDispatch).toHaveBeenCalled();
    });
});
