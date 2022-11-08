import { makeStyles } from '@material-ui/core';

const CodeEditor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>Code editor</div>
  )
}

export default CodeEditor


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font,
  },
}));