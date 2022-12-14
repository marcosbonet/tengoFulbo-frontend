import { DeletePlayer } from '../../infrastructure/components/buton.delete.tsx/button.delete';
import style from './my.match.module.css';

import { MyMatchList } from './my.matchlist';

export function MyMatchesPage() {
    return (
        <>
            <div>
                <h3 className={style.MyMatch}>My matches</h3>
                <MyMatchList />
                <p className={style.futbol}>futbol</p>
            </div>
            <DeletePlayer />
        </>
    );
}
