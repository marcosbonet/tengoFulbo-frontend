import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../../hooks/usePlayer';
import { PlayerRepo } from '../../services/playerRepo';
import style from './button.delete.module.css';

export function DeletePlayer() {
    const navigate = useNavigate();
    const { player } = usePlayer();
    const player1 = player.player;
    const servicePlayer = new PlayerRepo();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/home');
    };
    const handleDelete = () => {
        servicePlayer.delete();
        localStorage.removeItem('token');
        navigate('/home');
    };

    return (
        <>
            <div className={style.buttonContainer}>
                <div className={style.info}>
                    <p>Player Name: {player1?.playerName}</p>
                    <p>Email: {player1?.email}</p>
                </div>

                <button onClick={logout} className={style.buttonn}>
                    Logout
                </button>
                <button className={style.buttonn} onClick={handleDelete}>
                    Delete Account
                </button>
            </div>
        </>
    );
}
