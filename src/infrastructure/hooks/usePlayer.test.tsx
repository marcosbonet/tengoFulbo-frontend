export {};
// import { renderHook, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { usePlayer } from '../hooks/usePlayer';
// import { MatchType } from '../models/match.types';
// import { PlayerTypes, ProtoPlayer } from '../models/player.types';
// import { MatchRepo } from '../services/matchRepo';
// import { PlayerRepo } from '../services/playerRepo';

// import { appStore } from '../store/store';
// jest.mock('../services/PlayerRepo');
// const mockPlayer: PlayerTypes = {
//     id: '1234',
//     playerName: 'Robert',
//     password: 'robert@live.com',
//     email: '3 de diciembre',
//     matches: [],
// };
// const mockMatch: MatchType = {
//     id: '1234',
//     place: 'river',
//     image: 'papa',
//     date: '3 de diciembre',
//     players: [],
// };
// const newMockMatch: MatchType = {
//     id: '123',
//     place: 'boca',
//     image: 'papa',
//     date: '4 de diciembre',
//     players: [],
// };
// const newMockPlayer: PlayerTypes = {
//     id: '2345',
//     playerName: 'Jhon',
//     password: 'papa',
//     email: 'jhon@live.com',
//     matches: [],
// };

// describe('Given the use Player hook', () => {
//     let result: {
//         current: {
//             Players: Array<PlayerTypes>;
//             handleCreatePlayer: (newPlayer: ProtoPlayer) => void;
//             handleDelete: (id: string) => void;
//             handleUpdateAddMatch: (
//                 id: string | undefined,
//                 updateMatch: Partial<MatchType>
//             ) => void;
//             handleUpdateDeleteMatch: (
//                 id: string | undefined,
//                 updateMatch: Partial<MatchType>
//             ) => void;
//             handleLogin: (Player: Partial<PlayerTypes>) => void;
//         };
//     };
//     beforeEach(() => {
//         (PlayerRepo.prototype.login as jest.Mock).mockResolvedValue(mockPlayer);
//         (PlayerRepo.prototype.register as jest.Mock).mockResolvedValue(
//             mockPlayer
//         );
//         (PlayerRepo.prototype.updateadd as jest.Mock).mockResolvedValue([
//             { ...mockMatch, image: 'new img' },
//         ]);
//         (PlayerRepo.prototype.updatedelete as jest.Mock).mockResolvedValue(
//             mockPlayer
//         );

//         (PlayerRepo.prototype.createError as jest.Mock).mockResolvedValue([
//             mockPlayer,
//         ]);
//         (PlayerRepo.prototype.delete as jest.Mock).mockResolvedValue(
//             newMockPlayer
//         );
//         const wrapper = ({ children }: { children: JSX.Element }) => (
//             <Provider store={appStore}>{children}</Provider>
//         );
//         ({ result } = renderHook(() => usePlayer(), { wrapper }));
//     });

//     test('if we use HandleLogin should add a new item to the array of player', async () => {
//         const mockLog = {
//             name: 'pepe',
//             password: 'perejil',
//         };
//         await waitFor(() => {
//             result.current.handleLogin(mockLog);
//             expect(PlayerRepo.prototype.login).toHaveBeenCalled();
//         });
//     });
//     test('Then should return an error', async () => {
//         const error = new Error('');
//         PlayerRepo.prototype.login = jest.fn().mockRejectedValue(mockPlayer);
//         await waitFor(() => {
//             result.current.handleLogin({
//                 playerName: 'pepe',
//                 password: 'perejil',
//             });
//             expect(error).toBeInstanceOf(Error);
//         });
//     });
//     test('if we use HandleUpdateAddMatch should change the match of a user from the array of player', async () => {
//         await waitFor(() => {
//             result.current.handleUpdateAddMatch(mockMatch.id, mockMatch);
//             expect(
//                 PlayerRepo.prototype.updateadd(mockMatch.id, mockMatch)
//             ).toHaveBeenCalled();
//         });
//     });
//     test('Then handleadd should return an error', async () => {
//         const error = new Error('');
//         PlayerRepo.prototype.updateadd = jest
//             .fn()
//             .mockRejectedValue(mockPlayer);
//         await waitFor(() => {
//             result.current.handleUpdateAddMatch(mockPlayer.id, mockPlayer);
//             expect(error).toBeInstanceOf(Error);
//         });
//     });
//     test('if we use HandleUpdateDeleteMatch should change the match of a user from the array of player', async () => {
//         await waitFor(() => {
//             result.current.handleUpdateAddMatch(mockMatch.id, mockMatch);
//             expect(
//                 PlayerRepo.prototype.updateadd(mockMatch.id, mockMatch)
//             ).toHaveBeenCalled();
//         });
//     });

//     test('Then handledelete should return an error', async () => {
//         const error = new Error('');
//         PlayerRepo.prototype.updatedelete = jest
//             .fn()
//             .mockRejectedValue(mockPlayer);
//         await waitFor(() => {
//             result.current.handleUpdateDeleteMatch(mockPlayer.id, mockPlayer);
//             expect(error).toBeInstanceOf(Error);
//         });
//     });

//     test('if we use Handledelete should change the match of a user from the array of player', async () => {
//         await waitFor(() => {
//             result.current.handleDelete(mockMatch.id);
//             expect(
//                 PlayerRepo.prototype.delete(mockPlayer.id)
//             ).toHaveBeenCalled();
//         });
//     });

//     test('if we use logout should change the appointment of a user from the array of users', async () => {
//         await waitFor(() => {
//             result.current.handleUpdateDeleteMatch(mockMatch.id, mockMatch);
//             expect(
//                 PlayerRepo.prototype.updatedelete(mockMatch.id)
//             ).toHaveBeenCalled();
//         });
//     });
// });
