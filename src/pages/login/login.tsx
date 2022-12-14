import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { usePlayer } from '../../infrastructure/hooks/usePlayer';
import { ProtoPlayer } from '../../infrastructure/models/player.types';
import style from './login.module.css';

export function Login() {
    const initialState: ProtoPlayer = {
        playerName: '',
        password: '',
        email: '',
    };

    const { handleLogin } = usePlayer();
    const [data, setdata] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleLogin(data);
    };

    return (
        <>
            {' '}
            <div className={`${style.container} ${style.fadeInLeft}`}>
                <h2 className={style.form__tittle}>Login</h2>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div>
                        <input
                            name="playerName"
                            type="text"
                            placeholder="Name"
                            value={data.playerName}
                            onInput={handleInput}
                            className={style.form__input}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={data.password}
                            onInput={handleInput}
                            className={style.form__input}
                        />
                    </div>

                    <button name="login" type="submit" className={style.btn}>
                        Login
                    </button>
                </form>
                <div className={style.form__info}>
                    <p className={style['form__info--or']}>or</p>
                    <p>
                        don't have an account?{' '}
                        <Link
                            to="/register"
                            className={style.form__loginButton}
                        >
                            register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
