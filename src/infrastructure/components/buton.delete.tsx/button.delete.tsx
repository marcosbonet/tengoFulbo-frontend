import { PlayerRepo } from '../../services/playerRepo';

export function DeletePlayer() {
    const servicePlayer = new PlayerRepo();
    const handleRemovePlayer = () => {
        servicePlayer.delete();
        localStorage.removeItem('token');
    };

    return (
        <>
            <span
                className="buttonDelete"
                onClick={handleRemovePlayer}
                role="button"
            >
                ♲
            </span>
        </>
    );
}
