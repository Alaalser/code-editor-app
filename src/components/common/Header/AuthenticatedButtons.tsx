import { makeStyles } from '@material-ui/core';
import SingOut from '../../../auth/SignOut';

const AuthenticatedButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SingOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default AuthenticatedButtons;
