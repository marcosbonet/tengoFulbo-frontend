import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MyMatches } from './my.match';

export const MyMatchList = () => {
    const { player, handleGetOne } = usePlayer();

    handleGetOne();
    console.log(player, 'player');

    return (
        <ul>
            {player.player?.matches.map((match) => (
                <MyMatches match={match}></MyMatches>
            ))}
        </ul>
    );
};
