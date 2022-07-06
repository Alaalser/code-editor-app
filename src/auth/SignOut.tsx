import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../theme/colors';

const SingOut = () => {
  const { logout } = useAuth0();
  const classes = useStyles();
  const onSingOut = () => {
    logout();
  };
  return (
    <Button className={classes.button} onClick={onSingOut}>
      Sign Out
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: colors.white,
  },
}));

export default SingOut;
