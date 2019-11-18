import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import requiresAuth from '../../components/hoc/requiresAuth';
import { useFetching }  from '../../components/hoc/useFetching';
import { loadReviews, loadThemes, selectTheme } from './actions';
import { makeSelectSelectedTheme } from './selectors';
import saga from './saga';
import reducer from './reducer';
import FeedsList from './components/FeedsList';

const key = 'feeds';

function FeedsPageContainer({ 
  themes= [],
  selectedTheme,
  hasMoreThemes,
  reviews = [],
  selectedReviewsPage,
  onLoadReviews,
  onLoadThemes,
  onSelectTheme,
  }) {
  
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useFetching(() => !themes.length && onLoadThemes());

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {themes.length &&
          <FeedsList
            themes={themes}
            selectedTheme={selectedTheme}
            hasMoreThemes={hasMoreThemes}
            reviews={reviews}
            reviewsPage={selectedReviewsPage}
            onGetThemes={onLoadThemes}
            onGetReviews={onLoadReviews}
            onSelectTheme={onSelectTheme}
          />
        }
      </Container>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const feedsState = state.feeds || {};
  const makeSelectedTheme = makeSelectSelectedTheme();
  return {
    reviews: feedsState.reviews,
    themes: feedsState.themes,
    selectedTheme: makeSelectedTheme(state),
    hasMoreThemes: feedsState.hasMoreThemes,
    selectedReviewsPage: feedsState.selectedReviewsPage,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onLoadReviews: (payload) => dispatch(loadReviews(payload)),
    onLoadThemes: (payload) => dispatch(loadThemes(payload)),
    onSelectTheme: (payload) => dispatch(selectTheme(payload)),
  };
}

const FeedsPage = requiresAuth(connect(mapStateToProps, mapDispatchToProps)(FeedsPageContainer));
export default FeedsPage;