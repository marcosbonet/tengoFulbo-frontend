import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { ProtoPlayer } from '../../infrastructure/models/player.types';

export function Login() {
    const navigate = useNavigate();
    const initialState: ProtoPlayer = {
        playerName: '',
        password: '',
        email: '',
    };

    const { handleLogin, player } = usePlayer();
    const [data, setdata] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        await handleLogin(data)
            .then((resp) => {
                console.log(resp);
                console.log(player.token);
            })
            .then(() => navigate('/home'));
    };

    return (
        <>
            <h2 className="tittle">Login</h2>
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

                <button type="submit">Login</button>
            </form>
        </>
    );
}
