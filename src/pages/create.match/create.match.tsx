import { SyntheticEvent, useState } from 'react';
import style from './create.match.module.css';
import { useMatch } from '../../infrastructure/hooks/useMatch';
import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { ProtoMatch } from '../../infrastructure/models/match.types';

export function CreateMatch() {
    const initialState: ProtoMatch = {
        places: '',
        date: '',
        image: '',
        players: [],
    };
    const [data, setdata] = useState(initialState);

    const { handleCreateMatch } = useMatch();
    const { handleUpdateAddPlayer, player } = usePlayer();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleCreateMatch(data);
        handleUpdateAddPlayer(player.player?.playerName as string);
    };
    return (
        <>
            <div className={`${style.container} ${style.zoomInDown}`}>
                <h2 className={style.form__tittle}>Create Match</h2>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div>
                        <input
                            name="places"
                            type="text"
                            placeholder="Places"
                            value={data.places}
                            onInput={handleInput}
                            className={style.form__input}
                        />
                    </div>
                    <div>
                        <input
                            name="date"
                            type="text"
                            placeholder="Date"
                            value={data.date}
                            onInput={handleInput}
                            className={style.form__input}
                        />
                    </div>
                    <div>
                        <input
                            name="image"
                            type="text"
                            placeholder="Insert URL's Picture"
                            value={data.image}
                            onInput={handleInput}
                            className={style.form__input}
                        />
                    </div>
                    <button type="submit" className={style.btn}>
                        Create Match
                    </button>
                </form>
            </div>
        </>
    );
}
