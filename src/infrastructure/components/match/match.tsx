import { useMatch } from '../../hooks/useMatch';
import { usePlayer } from '../../hooks/usePlayer';

import { MatchType } from '../../models/match.types';

export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateAddMatch } = useMatch();
    const { handleUpdateAddPlayer } = usePlayer();

    const handleClick = () => {
        console.log(item.id);
        handleUpdateAddMatch(item.id);
        handleUpdateAddPlayer(item.id);
    };

    return (
        <>
            <li className="">
                <img src={item.image} alt=""></img>

                <p>{item.date}</p>
                <p>{item.places}</p>

                <button onClick={handleClick}>➕</button>
            </li>
        </>
    );
}
