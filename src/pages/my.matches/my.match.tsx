import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';
import style from './my.match.module.css';
export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer } = usePlayer();

    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <>
            <main>
                <li key={Math.floor(Math.random() * 1000000)}>
                    <div className={style.dic_img}>
                        <img
                            className={style.img}
                            src={match.image}
                            alt=""
                        ></img>
                    </div>
                    <p className={style.form__input}>{match.date}</p>
                    <p className={style.form__input}>{match.places}</p>

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
