import { IBook } from "interfaces/book";
import React, { useState, FC } from "react";
import {
  addToFavorites as addFavorite,
  removeFromFavorites as removeFavorite,
} from "services/util/favoritesHelper";

interface IFavoritesContext {
  favorites: IBook[];
  addToFavorites?: (book: IBook) => void;
  removeFromFavorites?: (book: IBook) => void;
}

const getFavorites = () => {
  const favorites = window.localStorage.getItem("favorites");
  if (!favorites) return [];
  if (!favorites.length) return [];
  return JSON.parse(favorites);
};

const defaultState = {
  favorites: getFavorites(),
};

export const FavoritesContext =
  React.createContext<IFavoritesContext>(defaultState);

const FavoritesProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState(defaultState.favorites);

  const sanitizeBook = (book: IBook) => {
    return {
      title: book.title,
      cover_id: book.cover_id,
      key: book.key,
      authors: book.authors,
      subject: book.subject,
    };
  };
  const addToFavorites = (book: IBook) => {
    const newFavorites = addFavorite(sanitizeBook(book));
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (book: IBook) => {
    const newFavorites = removeFavorite(sanitizeBook(book));
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
