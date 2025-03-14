import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignIn from "./page/SignIn";
import Home from "./page/Home";
import Ping from "./page/Ping";
import Bootstrap from "./page/Bootstrap";
import Protected from "./page/Protected";
import NotFound from "./page/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

type PrivateRouteProps = {
  children: React.ReactNode;
};

// react-auth-kit react-router did not work because a problem with react router version
// so wrote my own
const PrivateRoute = (props: PrivateRouteProps) => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated()
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return props.children
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/ping" element={<Ping />} />
      <Route path="/bootstrap" element={<Bootstrap />} />
      <Route path={'/protected'} element={<PrivateRoute><Protected /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
