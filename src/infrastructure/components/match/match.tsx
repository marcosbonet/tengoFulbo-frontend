import { useMatch } from '../../hooks/useMatch';
import { usePlayer } from '../../hooks/usePlayer';

import { MatchType } from '../../models/match.types';
import { PlayerTypes } from '../../models/player.types';
export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateAddMatch } = useMatch();
    const { player } = usePlayer();
    const playersmatch = player.player;

    const handleClick = () => {
        handleUpdateAddMatch(item.id);
    };

    return (
        <>
            <li className="">
                <img src={item.image} alt=""></img>

                <p>{item.date}</p>
                <p>{item.places}</p>

                {(playersmatch as PlayerTypes).matches.length < 11 ? (
                    <span
                        className="button"
                        onClick={handleClick}
                        role="button"
                    >
                        add
                    </span>
                ) : (
                    <></>
                )}
            </li>
        </>
    );
}
