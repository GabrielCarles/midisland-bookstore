import { getItem, setItem } from "./localStorageHelper";

interface IElement {
  title: string,
  cover_id: number,
  key: string,
}
const checkFavorite = (key: string) => {
  const favorites = getItem("favorites");
  if (!favorites) return false;
  if (favorites.length) {
    return favorites.includes(key);
  }
};

/* The logic of the next two functions could have easily fit in one, but I decided to separate it
into two functions for better readability */

const addToFavorites = (element: IElement) => {
  const currentFav = getItem("favorites");
  let favoritesArr = [];
  // TODO: Refactor needed!
  if (currentFav) {
    const favorites = JSON.parse(currentFav)
    if (favorites.length) {
      favoritesArr = favorites;
    }
    favoritesArr.push(element)
  } else {
    favoritesArr.push(element);
  }
  setItem("favorites", favoritesArr);
  return favoritesArr;
};

const removeFromFavorites = (element: IElement) => {
  const favorites = getItem("favorites");
  /* This condition is not entirely necessary since this function only gets called if
  the item is added to favorites, but just in case... */
  if (!favorites) return
  const parsedFavorites = JSON.parse(favorites)
  const index = parsedFavorites.indexOf(element);
  parsedFavorites.splice(index, 1)
  setItem("favorites", parsedFavorites);
  return parsedFavorites;
}

export { checkFavorite, addToFavorites, removeFromFavorites };
