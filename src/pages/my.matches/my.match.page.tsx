import { DeletePlayer } from '../../infrastructure/components/buton.delete.tsx/button.delete';
import { MyMatchList } from './my.matchlist';

export function MyMatchesPage() {
    return (
        <>
            <div>
                <h3>My matches</h3>
                <MyMatchList />
                <p>futbol</p>
            </div>
            <DeletePlayer />
        </>
    );
}
