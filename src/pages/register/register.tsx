import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtoPlayer } from '../../infrastructure/models/player.types';
import { PlayerRepo } from '../../infrastructure/services/playerRepo';

export function Register() {
    const navigate = useNavigate();
    const initialState: ProtoPlayer = {
        playerName: '',
        password: '',
        email: '',
    };
    const [data, setdata] = useState(initialState);
    const player = new PlayerRepo();

    const handleInput = (ev: React.SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handleSubmit = async (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        await player.register(data);
        navigate('/login');
    };
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="playerName"
                        type="text"
                        placeholder="Name"
                        value={data.playerName}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={data.password}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        value={data.email}
                        onInput={handleInput}
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </>
    );
}
