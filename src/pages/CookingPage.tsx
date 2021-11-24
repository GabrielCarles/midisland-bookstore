import React, { FC, useEffect, useState } from "react";
import BooksGrid from "components/BooksGrid";
import api from "services/api";

const CookingPage: FC = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    api.books
      .getBySubject("cooking")
      .then((resp) => {
        setBooks(resp.data.works);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <BooksGrid books={books}/>
  );
};

export default CookingPage;
