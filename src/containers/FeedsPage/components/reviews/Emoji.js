import React from 'react';
import getEmoji from 'get-emoji';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    marginTop: '2px',
    marginBottom: '2px',
    marginRight: '4px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #E8E8E8',
    cursor: 'pointer',
    height: '1.5rem',
    lineHeight: '23px',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
  },
  emoji: {
    lineHeight: '20px',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    marginRight: '4px',
  },
  count: {
    fontSize: '11px',
    fontFamily: 'helvetica, arial',
    display: 'flex',
    alignItems: 'center',
    top: '-2px',
    color: '#959595',
  },
}));

const EmojiImage = ({ name }) => <img style={{width: '16px', height: '16px'}} src={getEmoji(name)} alt={name} />;

export default function Emoji({ name, count }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <span className={classes.emoji}><EmojiImage name={name} /></span>
			<span className={classes.count}>{count}</span>
    </div>
  );
};