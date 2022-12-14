import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className={styles.headerList}>
                <div>
                    <Link to="Home">
                        <img
                            src={'./assets/messilogo.png'}
                            alt="Messi"
                            width="50px"
                            className={styles.messi}
                        />
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
}
