import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';

export function ItemMatch({ item }: { item: MatchType }) {
    const { handleUpdateDeletePlayer, player } = usePlayer();
    const playerArray = player;

    // const handleClick = () => {
    //     handleUpdateDeletePlayer(item.id);
    // };

    return (
        <li className="">
            <img src={item.image}></img>

            <p>{item.date}</p>
            <p>{item.place}</p>
            <ul>
                {item.players?.map((item) =>
                    item.id === playerArray.player?.id
                        ? playerArray.player.id
                        : item.id
                )}
            </ul>

            {/* <span className="button" onClick={handleClick} role="button">
                🗑️
            </span> */}
        </li>
    );
}
