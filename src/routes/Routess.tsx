import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import Loading from '../components/common/loading/Loading';
import routes from './routes';
import Header from '../components/common/Header/Header';
import Home from '../pages/Home/Home';

const Routess = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Routes>
          {/* <ProtectedRoute path={routes.codeEditor} element={<div>Home</div>} /> */}
          <Route path={routes.codeEditor} element={<ProtectedRoute component={<div>Code Editor</div>} />} />
          <Route path={routes.home} element={isAuthenticated ? <Navigate to={routes.codeEditor} /> : <Home />} />
        </Routes>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100vh',
  },
}));

export default Routess;
