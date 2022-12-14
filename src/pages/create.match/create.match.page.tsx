import { CreateMatch } from './create.match';
import style from './create.match.module.css';
export function CreateMatchPage() {
    return (
        <div>
            <CreateMatch />
            <p className={style.p}>Futbol</p>
        </div>
    );
}
