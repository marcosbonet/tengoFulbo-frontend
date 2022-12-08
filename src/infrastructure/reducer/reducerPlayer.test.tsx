import { MatchTypes } from '../models/match.types';
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
    const matchMock: MatchTypes = {
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
            console.log(result.player);
            expect(result).toEqual({ ...action.payload, isLogged: true });
        });
    });

    describe('When the action is logout', () => {
        beforeEach(() => {
            action = {
                type: actionPlayerTypes.logout,
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

                token: null,
            };
        });
        test('Then the returned state should include the action payload', () => {
            const result = PlayerReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
     describe('When the action is update', () => {
         beforeEach(() => {
             action = {
                 type: actionPlayerTypes.,
                 payload: [matchMock],
             };
             state = [matchMock];
         });
         test('Then the returned state should include the action payload', () => {
             const result = PlayerReducer(state, action);
             expect(result).toEqual(action.payload);
         });
     });

     describe('When the action is update and the id is not valid', () => {
         beforeEach(() => {
             action = {
                 type: actionMatchTypes.load,
                 payload: [matchMock],
             };
             state = [matchMock];
         });
         test('Then the returned state should be the original state', () => {
             const result = PlayerReducer(state, action);
             expect(result).toEqual(state);
         });
     });

     describe('When the action is delete', () => {
         beforeEach(() => {
             action = {
                 type: actionPlayerTypes.delete,
                 payload: [matchMock],
             };
             state = [matchMock];
         });
         test('Then the returned state should not include the action payload', () => {
             const result = PlayerReducer(state, action);
             expect(result).toEqual([matchMock]);
         });
     });

     describe('When the action is delete and the id is not valid', () => {
         beforeEach(() => {
             action = {
                 type: actionPlayerTypes.load,
                 payload: [matchMock],
             };
             state = [matchMock];
         });
         test('Then the returned state should should be the original state', () => {
             const result = PlayerReducer(state, action);
             expect(result).toEqual(state);
         });
     });

     describe('When the action is any other', () => {
         beforeEach(() => {
             action = {
                 type: actionPlayerTypes.,
                 payload: [matchMock],
             };
             state = [matchMock];
         });
         test('Then the returned state should be ...', () => {
             const result = PlayerReducer(state, action);
             expect(result).toEqual(state);
         });
     });
});
