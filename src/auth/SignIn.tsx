import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { colors } from '../theme/colors';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const onSignIn = () => {
    loginWithRedirect();
  };
  return (
    <Button className={classes.button} onClick={onSignIn}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: colors.white,
  },
}));

export default SignIn;
