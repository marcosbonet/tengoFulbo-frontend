import { useMatch } from '../../hooks/useMatch';
import { MatchType } from '../../models/match.types';
import { ItemMatch } from './match';
import Styles from './match.module.css';

export const MatchList = () => {
    const { matches } = useMatch();

    return (
        <>
            <ul className={Styles.matchul}>
                {matches.map((match: MatchType) => (
                    <li className={Styles.matchLi}>
                        <ItemMatch key={match.id} item={match}></ItemMatch>
                    </li>
                ))}
            </ul>
        </>
    );
};
