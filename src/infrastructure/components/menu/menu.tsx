import { Link } from 'react-router-dom';
import styles from './menu.module.css';

export function Menu() {
    const menuOptions = [
        { id: '2', path: '/Login', label: 'Login' },
        { id: '3', path: '/Register', label: 'Register' },
        { id: '4', path: '/MyMatchesPage', label: 'Matches' },
        { id: '5', path: '/CreateMatchPage', label: '+ Match ' },
    ];
    return (
        <ul className={styles.menuList}>
            {menuOptions.map((item) => (
                <li className={styles.menu__item} key={item.id}>
                    <Link className={styles.link} to={item.path}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
