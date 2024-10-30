import { Route, Routes } from 'react-router-dom';
import Home from '../pages/superuser/Home';
import RoleGuard from '../utils/helper/RoleGuard';
import SuperuserLayout from '../components/layout/SuperUserLayout';

function SuperuserRoutes(){
    return(
        <RoleGuard allowedRoles={['superuser']}>
        <Routes>
            <Route path="/" element={<SuperuserLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
        </RoleGuard>
    )
};
  
  export default SuperuserRoutes;
