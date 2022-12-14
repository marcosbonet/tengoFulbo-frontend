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
                <div>
                    <img
                        className={Styles.matchimage}
                        src={item.image}
                        alt=""
                    ></img>
                </div>
                <div className={Styles.matchdescription}>
                    <p>{item.date}</p>
                    <p>{item.places}</p>
                </div>

                <button onClick={handleClick} className={Styles.btn}>
                    Add match
                </button>
            </li>
        </>
    );
}
