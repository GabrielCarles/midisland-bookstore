import { FC } from "react";
import { IBooksGrid, IBook } from "interfaces/book";
import BookCard from "components/BookCard";

const BooksGrid: FC<IBooksGrid | null> = ({ books }) => {
  if (!books || !books.length) return <p>{"Loading..."}</p>;
  return (
    <section className="grid">
      {books.length &&
        books.map((book: IBook, idx) => (
          <BookCard key={idx} book={book} />
        ))}
    </section>
  );
};

export default BooksGrid;
