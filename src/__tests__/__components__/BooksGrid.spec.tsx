import BooksGrid from "components/BooksGrid";
import { render } from "test.utils";

describe("Book component tests", () => {
  test("Should render", () => {
    const books = [
      {
        authors: [{ name: "Homer" }],
        cover_edition_key: "OL24431676M",
        cover_id: 10934453,
        key: "/works/OL61981W",
        subject: ["Miami University (Oxford, Ohio). Erodelphian Society"],
        title: "Iliad",
      },
    ];
    render(<BooksGrid books={books} />);
  });

  test("Should render when prop is null", () => {
    render(<BooksGrid books={null} />);
  });
});
