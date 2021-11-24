import Link from "components/common/Link";
import { FavoritesContext } from "context/FavoritesContext";
import { IBook } from "interfaces/book";
import { FC, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { checkFavorite } from "services/util/favoritesHelper";

interface BookCardProps {
  book: IBook;
  key?: number;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const { t } = useTranslation();
  const { cover_id, title, authors, key, subject } = book;
  const [isFavorite, setFavorite] = useState(checkFavorite(key));

  const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFavorite) {
      addToFavorites?.(book);
      setFavorite(true);
    } else {
      removeFromFavorites?.(book);
      setFavorite(false);
    }
  };

  return (
    <article className="book_card">
      <section className="book_card-image">
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_id}.jpg`}
          alt={`cover-${title}`}
        />
      </section>
      <section className="book_card-information">
        <Link to={`../book/${key.replace("/works/", "")}`} replace >
          <p className="book_card-title">{title}</p>
        </Link>
        <p className="book_card-author">
          {t("book_by")}{" "}
          <strong>{authors && authors.length ? authors[0].name : "Unknown"}</strong>
        </p>
        {subject.length && <p>{subject[0]}</p>}
        <section className="book_card-actions">
          <button>{t("add_to_cart")}</button>
          <button data-testid="fav-button" onClick={(e) => handleFavorite(e)}>
            {isFavorite ? <IoHeart size={25} /> : <IoHeartOutline size={25} />}
          </button>
        </section>
      </section>
    </article>
  );
};

export default BookCard;
