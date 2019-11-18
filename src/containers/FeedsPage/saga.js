import { call, put, select, takeLatest } from 'redux-saga/effects';

import { LOAD_REVIEWS, LOAD_THEMES, SELECT_THEME } from './constants';
import { themesLoaded, reviewsLoaded, loadReviews as loadReviewsAction } from './actions';
import FeedsModel from './model';
import { makeSelectReviewsParams, makeSelectThemesParams } from './selectors';
import { loginExpired } from '../LoginPage/actions';
import { getReviews } from '../../services/data/ReviewsDataService';
import { getThemes } from '../../services/data/ThemesDataService';

function* loadReviews() {
  try {   
    const reviewParams = yield select(makeSelectReviewsParams());
    const response = yield call(getReviews, reviewParams);
    const reviewsModel = FeedsModel.getDecodedReviews(response.data);
    yield put(reviewsLoaded(reviewsModel));
  } catch (err) {
    yield put(loginExpired(err));
  }
};

function* loadThemes() {
  try {
    const themesParams = yield select(makeSelectThemesParams());
    const response = yield call(getThemes, themesParams);
    yield put(themesLoaded(response.data));
  } catch (err) {
    yield put(loginExpired(err));
  }
};

function* selectTheme() {
  yield put(loadReviewsAction());
};

export default function* ReviewsWatcher() {
  yield takeLatest(LOAD_REVIEWS, loadReviews);
  yield takeLatest(LOAD_THEMES, loadThemes);
  yield takeLatest(SELECT_THEME, selectTheme);
}