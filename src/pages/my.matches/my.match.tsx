import { ItemMatch } from '../../infrastructure/components/match/match';
import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';

export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer, player } = usePlayer();
    const playermatch = player;
    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <li className="">
            <img src={match.image} alt=""></img>

            <p>{match.date}</p>
            <p>{match.places}</p>
            <ul>
                {playermatch.player?.matches.map((matches) => (
                    <li key={matches.places}>
                        <ItemMatch item={matches}></ItemMatch>
                    </li>
                ))}
            </ul>

            {
                <span className="button" onClick={handleClick} role="button">
                    🗑️
                </span>
            }
        </li>
    );
}
