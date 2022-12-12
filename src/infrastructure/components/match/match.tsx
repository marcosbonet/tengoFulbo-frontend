import { useMatch } from '../../hooks/useMatch';
import Styles from './match.module.css';
import { MatchType } from '../../models/match.types';

export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateAddMatch } = useMatch();

    const handleClick = () => {
        handleUpdateAddMatch(item.id);
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
