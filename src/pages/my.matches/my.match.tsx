import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';
import { PlayerTypes } from '../../infrastructure/models/player.types';

export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer, player } = usePlayer();

    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <>
            {' '}
            <main>
                <ul>
                    {(player.player as PlayerTypes).matches.length > 0 ? (
                        player.player?.matches.map((match) => {
                            return (
                                <li key={Math.random()}>
                                    <img src={match.image} alt=""></img>
                                    <p>{match.date}</p>
                                    <p>{match.places}</p>

                                    {
                                        <span
                                            className="button"
                                            onClick={handleClick}
                                            role="button"
                                        >
                                            🗑️
                                        </span>
                                    }
                                </li>
                            );
                        })
                    ) : (
                        <p>You Don't have Matches on your list</p>
                    )}
                </ul>
            </main>
        </>
    );
}
