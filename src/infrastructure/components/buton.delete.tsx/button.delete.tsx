import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../../hooks/usePlayer';
import { PlayerRepo } from '../../services/playerRepo';

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
            <div>
                <img
                    src="https://images2.minutemediacdn.com/image/upload/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Fdataimagepngbase64iVBORw0KGgoAAAANSUhEUgAAAtMAAAIU-52f8e3c40f92300de1e18107fd9ab60c.jpg"
                    alt={player1?.playerName}
                    width="100px"
                />
                <p>Player Name: {player1?.playerName}</p>
                <p>Email: {player1?.email}</p>
            </div>
            <button onClick={logout}>Logout</button>
            <button onClick={handleDelete}>Delete Account</button>
        </>
    );
}
