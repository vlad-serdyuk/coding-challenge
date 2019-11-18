import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { login } from './actions';
import saga from './saga';
import reducer from './reducer';

const key = 'auth';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    marginTop: 100,
  },
  textField: {
    width: 300,
  },
  textFieldBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: 300,
  },
  error: {
    color: theme.palette.error.dark,
  },
}));

function LoginPageContainer({ auth = {}, onLogin }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // const [loading, setLoading] = React.useState(false);

  const onLoginButtonClick = () => {
    onLogin({ username, password: userPassword });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h5" component="h3" align="center" className={classes.title}>
            Login
        </Typography>
        <form>
          <Box component="div" m={1} className={classes.textFieldBox}>
            <TextField
              label="Username"
              type="search"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Box>
          <Box component="div" m={1} className={classes.textFieldBox}>
            <TextField
              label="Password"
              className={classes.textField}
              autoComplete="current-password"
              type="password"
              margin="normal"
              variant="outlined"
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
            />
          </Box>
          <Box component="div" m={2} align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onLoginButtonClick}
            >
              Login
            </Button>
          </Box>
        </form>
        {auth.error
            && <Typography variant="h5" component="h5" align="center" className={classes.error}>
                {auth.error}
              </Typography>
        }
      </Container>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (payload) => dispatch(login(payload))
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
)(LoginPageContainer);