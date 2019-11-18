import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 350,
    overflow: 'auto',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    margin: 0,
    justifyContent: 'left',
    paddingLeft: 8,
  },
}));

export default function ThemesList({ themes, hasMoreThemes, onGetThemes, onSelectTheme }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InfiniteScroll
        loadMore={onGetThemes}
        hasMore={hasMoreThemes}
        loader={<div className={classes.button}>Loading...</div>}
        useWindow={false}
        className={classes.list}
      >
        {
          themes.map((theme, idx) => (
            <Button
              key={idx}
              className={classes.button}
              onClick={() => onSelectTheme(theme.id)}
            >
              {theme.name}
            </Button>
          ))
        }
      </InfiniteScroll>
    </div>
  );
};