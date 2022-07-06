import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../../store/darkMode/hooks';
import { toggleDarkMode } from '../../../store/darkMode/reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import UnauthenticatedButtons from './UnauthenticatedButtons';
import AuthenticatedButtons from './AuthenticatedButtons';

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => dispatch(toggleDarkMode());
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));
