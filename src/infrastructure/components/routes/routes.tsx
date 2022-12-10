import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../../../pages/home/home';

// const Home = lazy(() => import('../../../features/home/page/home.page'));
// const Todo = lazy(() => import('../../../features/todo/page/todo.page'));
// const About = lazy(() => import('../../../features/about/page/about.page'));
export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<Home />}></Route>
            {/* <Route path="My matches" element={<MyMatches></MyMatches>}></Route>
                <Route path="Register" element={<Register></Register>}></Route>
                <Route path="Login" element={<Login></Login>}></Route>
                <Route path="Create Match" element={<CreateMatch></CreateMatch>}></Route> 
            
                <Route path="" element={<home></home>}></Route>*/}
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
