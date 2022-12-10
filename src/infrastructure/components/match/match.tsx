import { useMatch } from '../../hooks/useMatch';

import { MatchType } from '../../models/match.types';
export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateAddMatch } = useMatch();

    const handleClick = () => {
        handleUpdateAddMatch(item.id);
    };

    return (
        <>
            <li className="">
                <img src={item.image} alt=""></img>

                <p>{item.date}</p>
                <p>{item.places}</p>

                <span className="button" onClick={handleClick} role="button">
                    ✚
                </span>
            </li>
        </>
    );
}
