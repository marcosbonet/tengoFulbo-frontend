import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MyMatches } from './my.match';

export const MyMatchList = () => {
    const { player } = usePlayer();
    return (
        <>
            <ul>
                {player.player?.matches.map((match) => (
                    <MyMatches match={match}></MyMatches>
                ))}
            </ul>
        </>
    );
};
