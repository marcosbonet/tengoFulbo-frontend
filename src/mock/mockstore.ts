import { configureStore } from '@reduxjs/toolkit';
import { MatchType } from '../infrastructure/models/match.types';
import { PlayerTypes } from '../infrastructure/models/player.types';
import { MatchReducer } from '../infrastructure/reducer/reducerMatch';
import { PlayerReducer } from '../infrastructure/reducer/reducerPlayer';
import { rootState } from '../infrastructure/store/store';

export const mockMatch: MatchType = {
    id: '1234',
    places: 'river',
    image: 'papa',
    date: '3 de diciembre',
    players: [],
};
export const mockPlayer: PlayerTypes = {
    id: '1234',
    playerName: 'Robert',
    password: 'robert@live.com',
    email: '3 de diciembre',
    matches: [mockMatch],
};

export const preloadedState: Partial<rootState> = {
    player: {
        isLogged: true,
        player: mockPlayer,
        token: '',
    },
    matches: [mockMatch],
};

export const mockStore = configureStore({
    reducer: {
        player: PlayerReducer,
        matches: MatchReducer,
    },
    preloadedState,
});
