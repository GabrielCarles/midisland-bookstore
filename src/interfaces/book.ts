interface IBook {
  authors: { name: string }[];
  cover_id: number;
  key: string;
  title: string;
  subject: string[] | [];
}

interface IBooksGrid {
  books: IBook[];
}

interface IBookDescription {
  covers: number[];
  key: string;
  description: string;
  title: string;
  subjects: string[] | [];
}

export type { IBook, IBooksGrid, IBookDescription };
