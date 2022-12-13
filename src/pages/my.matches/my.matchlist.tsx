import { useEffect } from 'react';
import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MyMatches } from './my.match';

export const MyMatchList = () => {
    const { player, handleGetOne } = usePlayer();

    // useEffect(() => {
    //     handleGetOne();
    // }, [handleGetOne]);

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
