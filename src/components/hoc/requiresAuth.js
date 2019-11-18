import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    marginLeft: '50%',
    marginTop: '25%',
  },
}));

export default ChildComponent => {
  const ComposedComponent = props => {
    const classes = useStyles();

    if (props && (props.isLoggedIn === undefined)) {
      return <CircularProgress className={classes.progress} />;
    }

    if (props && props.isLoggedIn) {
      return <ChildComponent {...props} />;
    }

    return  <Redirect to={{ pathname: '/login' }} />;
  };

  function mapStateToProps(state) {
    const authState = state.auth || {};
    return {
      isLoggedIn: authState.isLoggedIn,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};