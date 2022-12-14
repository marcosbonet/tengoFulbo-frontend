import { useMatch } from '../../hooks/useMatch';
import Styles from './match.module.css';
import { MatchType } from '../../models/match.types';
import { usePlayer } from '../../hooks/usePlayer';

export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateAddMatch } = useMatch();
    const { handleUpdateAddPlayer } = usePlayer();

    const handleClick = () => {
        handleUpdateAddMatch(item.id);
        handleUpdateAddPlayer(item.id);
    };

    return (
        <>
            <li className={Styles.containermatch}>
                <img
                    className={Styles.matchimage}
                    src={item.image}
                    alt=""
                ></img>
                <div className={Styles.matchdescription}>
                    <p>{item.date}</p>
                    <p>{item.places}</p>
                </div>
                <button onClick={handleClick}>Add match</button>
            </li>
        </>
    );
}
