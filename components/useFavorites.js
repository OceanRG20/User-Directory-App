import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkIfFavorite = async (uuid) => {
  const stored = await AsyncStorage.getItem('favorites');
  const favorites = stored ? JSON.parse(stored) : [];
  return favorites.some(fav => fav.login.uuid === uuid);
};

export const toggleFavoriteUser = async (user, isFavorite) => {
  const stored = await AsyncStorage.getItem('favorites');
  let favorites = stored ? JSON.parse(stored) : [];

  if (isFavorite) {
    favorites = favorites.filter(fav => fav.login.uuid !== user.login.uuid);
  } else {
    favorites.push(user);
  }

  await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  return !isFavorite;
};