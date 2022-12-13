import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMatch } from '../../infrastructure/hooks/useMatch';
import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { ProtoMatch } from '../../infrastructure/models/match.types';
type ProtoMatchtypes = {
    places: string;
    date: string;
    image: string;
    players: Array<string>;
};

export function CreateMatch() {
    const navigate = useNavigate();
    const initialState: ProtoMatchtypes = {
        places: '',
        date: '',
        image: '',
        players: [],
    };
    const [data, setdata] = useState(initialState);

    const { handleCreateMatch } = useMatch();
    const { handleUpdateAddPlayer, player } = usePlayer();

    const handleInput = (ev: React.SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handleSubmit = async (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        const newMatch: ProtoMatch = {
            ...data,
            places: data.places,
            date: data.date,
            image: data.image,
            players: [],
        };
        handleCreateMatch(newMatch);
        handleUpdateAddPlayer(player.player?.playerName as string);
        navigate('/Home');
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
