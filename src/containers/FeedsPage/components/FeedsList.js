import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ThemesToolbar from './themes/ThemesToolbar';
import ReviewsList from './reviews/ReviewsList';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
}));

export default function FeedsList({ 
  themes,
  selectedTheme,
  hasMoreThemes,
  reviews,
  reviewsPage,
  onGetThemes,
  onGetReviews,
  onSelectTheme,
}) {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>
      <ThemesToolbar
        themes={themes}
        selectedTheme={selectedTheme}
        hasMoreThemes={hasMoreThemes}
        onGetThemes={onGetThemes}
        onSelectTheme={onSelectTheme}
      />
      <ReviewsList
        reviews={reviews}
        reviewsPage={reviewsPage}
        onGetReviews={onGetReviews}
      />
    </Container>
  );
};