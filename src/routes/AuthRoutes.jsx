import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/Login';
import AuthLayout from '../components/layout/AuthLayout';

function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
            </Route>
        </Routes>
    )
};
  
  export default AuthRoutes;
