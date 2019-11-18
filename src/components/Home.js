import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed align="center">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            This is a home page.
          </Typography>
          <Typography component="p">
            This page doesn't make any sense.
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
}