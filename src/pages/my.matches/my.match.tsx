import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';

export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer } = usePlayer();

    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <>
            <main>
                <li key={Math.floor(Math.random() * 1000000)}>
                    <img src={match.image} alt=""></img>
                    <p>{match.date}</p>
                    <p>{match.places}</p>

                    <button
                        className="button"
                        onClick={handleClick}
                        placeholder="basura"
                    >
                        🗑️
                    </button>
                </li>
            </main>
        </>
    );
}
