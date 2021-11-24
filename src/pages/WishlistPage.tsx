import React, { FC, useContext } from "react";
import BooksGrid from "components/BooksGrid";
import { FavoritesContext } from "context/FavoritesContext";

const WishlistPage: FC = () => {
  const {favorites } = useContext(FavoritesContext);
  if (!favorites.length) return <div>Nothing to see here</div>
  return (
    <BooksGrid books={favorites}/>
  );
};

export default WishlistPage;
