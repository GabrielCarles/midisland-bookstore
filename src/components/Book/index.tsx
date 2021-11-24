import { IBookDescription } from "interfaces/book";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface IBookProps {
  book: IBookDescription | null;
}

const Book: FC<IBookProps> = ({ book }) => {
  const { t } = useTranslation();
  if (!book) return <p>{t("We cant find that book")}</p>;
  const { title, description, covers, subjects } = book;
  return (
    <article className="book_container">
      <section className="book_container-left">
        <img src={`https://covers.openlibrary.org/b/id/${covers[0]}.jpg`} alt={`${title} cover`} />
      </section>
      <section className="book_container-right">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{subjects.join(', ')}</p>
      </section>
    </article>
  );
};

export default Book;
