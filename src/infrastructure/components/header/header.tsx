import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className={styles.header}>
                <div>
                    <a href="/">
                        <Link to="Home">
                            <img
                                src={'./assets/lionel-messi.jpg'}
                                alt="Messi"
                                width="50px"
                            />
                        </Link>
                    </a>
                </div>
                <div className={styles.menuNav}>
                    <Menu />
                </div>
            </div>
        </header>
    );
}
