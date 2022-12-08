export {};
// import { PlayerTypes } from '../models/player.types';
// import { actionPlayerTypes } from './actionTypesPlayer';
// import { PlayerReducer } from './reducerPlayer';

// describe('Given the function PlayerReducer', () => {
//     const PlayerMock: PlayerTypes = {
//         id: '',
//         playerName: '',
//         password: '',
//         email: '',
//         matches: [],
//     };

//     let action: { type: string; payload: unknown };
//     let state: {
//         isLogged: false;
//         playerName: 'string';
//         password: 'string';
//         token: 'string';
//     };

//     describe('When the action is login', () => {
//         beforeEach(() => {
//             action = {
//                 type: actionPlayerTypes.login,
//                 payload: [PlayerMock],
//             };
//         //     state = {

//         //     };
//         // });
//         // test('Then the returned state should be the action payload', () => {
//         //     const result = PlayerReducer(state, action);
//         //     expect(result).toEqual(action.payload);
//         // });
//     });

//     describe('When the action is Create', () => {
//         beforeEach(() => {
//             action = {
//                 type: actionPlayerTypes.logout,
//                 payload: [PlayerMock],
//             };
//             state = {
//                 isLogged: false,
//                 playerName: 'string',
//                 password: 'string',
//                 token: 'string',
//             };
//         });
//         test('Then the returned state should include the action payload', () => {
//             const result = PlayerReducer(state, action);
//             expect(result).toEqual(action.payload);
//         });
//     });
// });
