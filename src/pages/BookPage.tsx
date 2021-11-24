import React, { FC, useEffect, useState } from "react";
import api from "services/api";
import { useLocation } from "react-router-dom";
import Book from "components/Book";

const BookPage: FC = () => {
  const [book, setBooks] = useState(null);
  const location = useLocation();
  useEffect(() => {
    api.books
      .getByWork(location.pathname.replace("/book/", ""))
      .then((resp) => {
        console.log(resp.data);
        setBooks(resp.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  return <Book book={book} />;
};

export default BookPage;
