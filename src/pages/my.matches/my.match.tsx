import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';

export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer } = usePlayer();

    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <li className="">
            <img src={match.image} alt=""></img>

            <p>{match.date}</p>
            <p>{match.place}</p>
            <ul>
                {match.players?.map((player) => (
                    <li>{player.playerName}</li>
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
