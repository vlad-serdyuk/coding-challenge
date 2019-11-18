import { THEMES_LOADED, REVIEWS_LOADED, SELECT_THEME, LIMIT } from './constants';

const initialState = {
  themes: [],
  themesParams: { 
    offset: 0,
    limit: LIMIT,
  },
  reviews: [], 
  reviewsParams: { 
    offset: 0,
    limit: LIMIT,
    theme_id: undefined,
  },
  selectedTheme: null,
  hasMoreThemes: true,
  selectedReviewsPage: 0,
  error: '',
 };

const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEMES_LOADED:
      return {
        ...state,
        error: '',
        themes: state.themes.length ? [...state.themes, ...action.payload] : action.payload,
        hasMoreThemes: (action.payload.length === LIMIT),
        themesParams: {
          ...state.themesParams,
          offset: state.themesParams.offset + LIMIT,
        },
      }; 
    case REVIEWS_LOADED:
      return {
        ...state,
        error: '',
        reviews: state.reviews.length ? [...state.reviews, ...action.payload] : action.payload,
        reviewsParams: {
          ...state.reviewsParams,
          offset: state.reviewsParams.offset + LIMIT,
        },
      };
    case SELECT_THEME:
      return {
        ...state,
        error: '',
        selectedTheme: action.payload,
        selectedReviewsPage: 0,
        reviews: [],
        reviewsParams: {
          ...state.reviewsParams,
          offset: 0,
          theme_id: action.payload,
        },
      };
    default:
      return state;
    }
};

export default feedsReducer;