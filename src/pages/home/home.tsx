import { MatchList } from '../../infrastructure/components/match/matchlist';
import styles from './home.page.module.css';

export function Home() {
    return (
        <>
            <MatchList />
            <p className={styles.futbol}>futbol</p>
        </>
    );
}
