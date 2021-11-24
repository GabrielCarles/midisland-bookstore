
import Book from "components/Book";
import { render } from "test.utils";

describe("Book component tests", () => {
  test("Should render", () => {
    const book = {
      key: "",
      title: "",
      description: "",
      covers: [],
      subjects: [],
    };
    render(<Book book={book} />);
  });

  test("Should render when prop is null", () => {
    render(<Book book={null} />);
  });
});
