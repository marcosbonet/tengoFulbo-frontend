import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '/Home', label: 'Home' },
        { id: '2', path: '/LoginPage', label: 'Login' },
        { id: '3', path: '/RegisterPage', label: 'Register' },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
