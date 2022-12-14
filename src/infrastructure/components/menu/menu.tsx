import { Link } from 'react-router-dom';
import Styles from './menu.module.css';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '/Home', label: 'Home' },
        { id: '2', path: '/Login', label: 'Login' },
        { id: '3', path: '/Register', label: 'Register' },
        { id: '4', path: '/MyMatchesPage', label: 'My Matches' },
        { id: '5', path: '/CreateMatchPage', label: 'Create Match ' },
    ];
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.ul}>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link className={Styles.link} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
