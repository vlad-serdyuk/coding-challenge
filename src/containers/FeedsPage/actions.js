import { LOAD_REVIEWS, REVIEWS_LOADED, LOAD_THEMES, THEMES_LOADED, SELECT_THEME } from './constants';

export function loadReviews(payload) {
  return {
    type: LOAD_REVIEWS,
    payload,
  };
};

export function reviewsLoaded(payload) {
  return {
    type: REVIEWS_LOADED,
    payload,
  };
};

export function loadThemes(payload) {
  return {
    type: LOAD_THEMES,
    payload,
  };
};

export function themesLoaded(payload) {
  return {
    type: THEMES_LOADED,
    payload,
  };
};

export function selectTheme(payload) {
  return {
    type: SELECT_THEME,
    payload,
  };
};