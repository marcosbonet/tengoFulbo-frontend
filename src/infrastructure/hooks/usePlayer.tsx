export {};
// import { useCallback, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { rootState } from '../store/store';
// import * as ac from '../reducer/actionCreatorMatch';
// import { MatchTypes, ProtoMatch } from '../models/match.types';
// import { PlayerRepo } from '../services/playerRepo';

// export const usePlayer = () => {
//     const player = useSelector((state: rootState) => state.player);
//     const dispatcher = useDispatch();
//     const apiPlayer = useMemo(() => new PlayerRepo(), []);
//     const handleLogin = useCallback(
//         () =>
//             apiPlayer
//                 .login(data)
//                 .then((matches) => dispatcher(ac.loadActionCreator(matches)))
//                 .catch((error: Error) =>
//                     console.log(error.name, error.message)
//                 ),
//         [apiPlayer, dispatcher]
//     );
//     const handleRegister = (newPlayer: ProtoMatch) => {
//         apiPlayer
//             .register(newPlayer)
//             .then((matches) => dispatcher(ac.createActionCreator(matches)))
//             .catch((error: Error) => console.log(error.name, error.message));
//     };
//     const handleDeletePlayer = (updatePlayer: MatchTypes) => {
//         apiPlayer
//             .delete(updatePlayer.id)
//             .then(() => dispatcher(ac.updateActionCreator(updateMatch)))
//             .catch((error: Error) => console.log(error.name, error.message));
//     };

//     return {
//         player,
//         handleLogin,
//         handleRegister,
//         handleDeletePlayer,
//     };
// };
