import { SyntheticEvent, useState } from 'react';

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
            <h2>Create Match</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="places"
                        type="text"
                        placeholder="Places"
                        value={data.places}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        name="date"
                        type="text"
                        placeholder="Date"
                        value={data.date}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        name="Insert URL's Picture"
                        type="text"
                        value={data.image}
                        onInput={handleInput}
                    />
                </div>

                <button type="submit">Create Match</button>
            </form>
        </>
    );
}
