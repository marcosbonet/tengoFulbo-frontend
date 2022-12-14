import { PlayerTypes } from '../models/player.types';
import { actionPlayerTypes } from './actionTypesPlayer';
import { PlayerReducer } from './reducerPlayer';

describe('Given the function PlayerReducer', () => {
    const PlayerMock: PlayerTypes = {
        id: '123',
        playerName: '',
        password: '',
        email: '',
        matches: [],
    };

    let action: { type: string; payload: unknown };
    let state: {
        isLogged: boolean;
        player: PlayerTypes | null;
        token: string | null;
    };

    describe('When the action is login', () => {
        beforeEach(() => {
            action = {
                type: actionPlayerTypes.login,
                payload: { player: PlayerMock, token: 'token', isLogged: true },
            };
            state = {
                ...state,
            };
        });
        test('Then the returned state should be the action payload', () => {
            const result = PlayerReducer(state, action);

            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is logout', () => {
        beforeEach(() => {
            action = {
                type: actionPlayerTypes.logout,
                payload: { isLogged: false, player: null, token: null },
            };
            state = {
                isLogged: true,
                player: {
                    email: '',
                    id: '',
                    matches: [],
                    password: '',
                    playerName: '',
                },

                token: 'null',
            };
        });
        test('Then the returned state should include the action payload', () => {
            const result = PlayerReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is UPDATEAPP', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionPlayerTypes.updateAdd,
                payload: { player: PlayerMock, token: 'token' },
            };
            state = {
                ...state,
                isLogged: true,
                player: PlayerMock,
                token: 'token',
            };
            const result = PlayerReducer(state, action);
            expect(result.player?.matches).toEqual([action.payload]);
        });
    });
    describe('When the action is UPDATEAPP adn get a error', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionPlayerTypes.updateAdd,
                payload: { player: PlayerMock, token: 'token' },
            };
            state = {
                ...state,
                isLogged: true,
                player: PlayerMock,
                token: 'token',
            };
            const result = PlayerReducer(state, action);
            expect(result.player?.matches).not.toContain([action.payload]);
        });
    });
    describe('When the action is GETONE', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionPlayerTypes.getOne,
                payload: PlayerMock,
            };
            state = {
                ...state,
            };
            const result = PlayerReducer(state, action);
            expect(result.player?.matches).not.toContain([action.payload]);
        });
    });

    describe('When the action is DELETEFAV', () => {
        test('Then the return state should include the updated action payload', () => {
            action = {
                type: actionPlayerTypes.updateDelete,
                payload: { player: PlayerMock, token: 'token' },
            };
            state = {
                isLogged: true,
                player: {
                    email: '',
                    id: '',
                    matches: [],
                    password: '',
                    playerName: '',
                },

                token: 'null',
            };
            const result = PlayerReducer(state, action);
            expect(result.player?.matches).toEqual([]);
        });
    });
});
