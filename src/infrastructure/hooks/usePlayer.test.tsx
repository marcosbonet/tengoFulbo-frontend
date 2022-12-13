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

test('if we use logout should handleUpdateDeletePlayer of a user from the array of users', async () => {
    await waitFor(async () => {
        PlayerRepo.prototype.updatedelete = jest
            .fn()
            .mockResolvedValue(mockPlayer);
        await result.current.handleUpdateDeletePlayer([mockPlayer]);
        expect(PlayerRepo.prototype.updatedelete).toHaveBeenCalled();
    });
});
test('if we use HandleUpdateAddMatch should change the match of a user from the array of player', async () => {
    await waitFor(async () => {
        PlayerRepo.prototype.updateadd = jest
            .fn()
            .mockResolvedValue(mockPlayer);
        await result.current.handleUpdateAddPlayer(mockPlayer.id);
        expect(PlayerRepo.prototype.updateadd).toHaveBeenCalled();
    });
});
// test('Then handleadd should return an error', async () => {
//     const error = new Error('');
//     PlayerRepo.prototype.updateadd = jest
//         .fn()
//         .mockRejectedValue(mockPlayer);
//     await waitFor(() => {
//         result.current.handleUpdateAddPlayer(mockMatch.id);
//         expect(error).toBeInstanceOf(Error);
//     });
// });
// test('if we use HandleUpdateDeleteMatch should change the match of a user from the array of player', async () => {
//     await waitFor(() => {
//         result.current.handleUpdateDeletePlayer(mockMatch.id);
//         expect(
//             PlayerRepo.prototype.updateadd(mockMatch.id)
//         ).toHaveBeenCalled();
//     });
// });

// test('Then handledelete should return an error', async () => {
//     const error = new Error('');
//     PlayerRepo.prototype.updatedelete = jest
//         .fn()
//         .mockRejectedValue(mockPlayer);
//     await waitFor(() => {
//         result.current.handleUpdateDeletePlayer(mockPlayer.id);
//         expect(error).toBeInstanceOf(Error);
//     });
// });
