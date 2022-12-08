import { Match } from '../../../pages/home/matches';
import { Login } from '../../../pages/login/login';
import { Register } from '../../../pages/register/register';

export function App() {
    return (
        <div>
            Tengo Fulbo
            <Register></Register>
            <Login></Login>
            <Match></Match>
        </div>
    );
}
