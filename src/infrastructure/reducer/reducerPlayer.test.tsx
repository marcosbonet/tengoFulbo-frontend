import { MatchType } from '../models/match.types';
import { PlayerTypes, PlayerWithToken } from '../models/player.types';
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
    const matchMock: MatchType = {
        id: '',
        place: '',
        date: '',
        image: '',
    };

    let action: { type: string; payload: PlayerWithToken };
    let state: {
        isLogged: boolean;
        player: PlayerTypes;
        token: string;
    };

    describe('When the action is login', () => {
        beforeEach(() => {
            action = {
                type: actionPlayerTypes.login,
                payload: { player: PlayerMock, token: 'token' },
            };
            state = {
                isLogged: false,
                player: {
                    email: '',
                    id: '',
                    matches: [],
                    password: '',
                    playerName: '',
                },
                token: '',
            };
        });
        test('Then the returned state should be the action payload', () => {
            const result = PlayerReducer(state, action);

            expect(result).toEqual({ ...action.payload, isLogged: true });
        });
    });

    // describe('When the action is logout', () => {
    //     beforeEach(() => {
    //         action = {
    //             type: actionPlayerTypes.logout,
    //             payload: { player: null, token: null, isLogged: false },
    //         };
    //         state = {
    //             isLogged: true,
    //             player: {
    //                 email: '',
    //                 id: '',
    //                 matches: [],
    //                 password: '',
    //                 playerName: '',
    //             },

    //             token: 'null',
    //         };
    //     });
    //     test('Then the returned state should include the action payload', () => {
    //         const result = PlayerReducer(state, action);
    //         expect(result).toEqual(action.payload);
    //     });
    // });
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
