import React from 'react';
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useFetching }  from '../../components/hoc/useFetching';
import { loadAuth } from '../LoginPage/actions';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from '../LoginPage/saga';
import reducer from '../LoginPage/reducer';

const key = 'auth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    textDecoration: 'unset',
    color: '#FFFFFF',
  },
}));

function HeaderContainer({ auth = {}, onLoadAuth }) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useFetching(onLoadAuth);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.titleLink}>App</Link>
          </Typography>
          <Button><Link to="/feeds" style={{ textDecoration: 'none', color: 'white' }}>Feeds</Link></Button>
          {
            auth.isLoggedIn
              ? <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              :
                <Button><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadAuth: () => dispatch(loadAuth()),
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(HeaderContainer);