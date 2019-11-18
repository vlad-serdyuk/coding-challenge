import { EMOJI_NAME  } from './constants';

export default class FeedsModel {
  static getThemesListModel(themes) {
    return themes.reduce((acc, theme) => {
      const foundTheme = acc.find(item => item.name === EMOJI_NAME[theme.sentiment]);

      if (foundTheme) {
        foundTheme.count += 1;
      } else {
        acc.push({
          name: EMOJI_NAME[theme.sentiment],
          count: 1,
        });
      }

      return acc;
    }, []);
  } 

  static getDecodedReviews(reviews) {
    return reviews.map((review) => ({ ...review, emoji: FeedsModel.getThemesListModel(review.themes) }));
  };
};