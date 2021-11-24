import React, { FC, useEffect, useState } from "react";
import BooksGrid from "components/BooksGrid";
import api from "services/api";

const ThrillerPage: FC = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    api.books
      .getBySubject("thriller")
      .then((resp) => {
        setBooks(resp.data.works);
      })
      .catch((err) => console.log(err));
  }, []);
  return <BooksGrid books={books} />;
};

export default ThrillerPage;
