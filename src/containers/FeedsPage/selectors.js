import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFeeds = state => state.feeds || initialState;

const makeSelectReviewsParams = () =>
  createSelector(
    selectFeeds,
    feedsState => feedsState.reviewsParams,
  );

const makeSelectThemesParams = () =>
  createSelector(
    selectFeeds,
    feedsState => feedsState.themesParams,
  );

const makeSelectSelectedTheme = () =>
  createSelector(
    selectFeeds,
    feedsState => {
      if (feedsState && feedsState.themes) {
        const foundTheme = feedsState.themes.find(theme => feedsState.selectedTheme === theme.id);
        return foundTheme ? foundTheme.name : '';
      }

      return '';
    },
  );

  export {
    selectFeeds,
    makeSelectReviewsParams,
    makeSelectThemesParams,
    makeSelectSelectedTheme,
  };