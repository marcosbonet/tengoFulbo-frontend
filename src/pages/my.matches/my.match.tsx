import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { MatchType } from '../../infrastructure/models/match.types';
import style from './my.match.module.css';
import styles from './my.match.module.css';
export function MyMatches({ match }: { match: MatchType }) {
    const { handleUpdateDeletePlayer } = usePlayer();

    const handleClick = () => {
        handleUpdateDeletePlayer(match);
    };

    return (
        <>
            <main>
                <li
                    key={Math.floor(Math.random() * 1000000)}
                    className={styles.li}
                >
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
                        className={style.btn}
                        onClick={handleClick}
                        placeholder="basura"
                    >
                        Delete match
                    </button>
                </li>
            </main>
        </>
    );
}
