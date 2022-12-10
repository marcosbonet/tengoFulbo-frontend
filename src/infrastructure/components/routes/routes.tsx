import { Route, Routes } from 'react-router-dom';

import { Home } from '../../../pages/home/home';
import { Login } from '../../../pages/login/login';

import { MyMatchesPage } from '../../../pages/my.matches/my.match.page';
import { Register } from '../../../pages/register/register';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home" element={<Home />}></Route>
            <Route
                path="Mymatches"
                element={<MyMatchesPage></MyMatchesPage>}
            ></Route>
            <Route path="Register" element={<Register></Register>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
            <Route path="" element={<Home></Home>}></Route>
        </Routes>
    );
}
