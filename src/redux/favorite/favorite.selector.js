export const selectFavoriteCount = (rootReducer) => {
  return rootReducer.favoriteReducer.favorite.length;
};
export const isFavorite = (rootReducer, itemId) => {
  return rootReducer.favoriteReducer.favorite.some(
    (item) => item.id === itemId
  );
};