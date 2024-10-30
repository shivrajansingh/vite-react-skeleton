import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperuserRoutes from './SuperuserRoutes';
import AuthRoutes from './AuthRoutes';
// import AdminRoutes from './AdminRoutes';
// import AgentRoutes from './AgentRoutes';
// import NoAccess from '../pages/NoAccess';

const MainRoutes = () => {
  return (
    <Router>
        <Routes>
         <Route path="/" element={<AuthRoutes />} />
         <Route path="/s/*" element={<SuperuserRoutes />} />
        </Routes>
    </Router>
  );
};

export default MainRoutes;