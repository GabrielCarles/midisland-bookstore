import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookCard from "components/BookCard";
import { render } from "test.utils";

const book = {
  authors: [{ name: "Homer" }],
  cover_edition_key: "OL24431676M",
  cover_id: 10934453,
  key: "/works/OL61981W",
  subject: ["Miami University (Oxford, Ohio). Erodelphian Society"],
  title: "Iliad",
};

describe("Book card:", () => {
  test("should render", () => {
    render(<BookCard book={book} />);
  });

  test("adds book to favorites", () => {
    render(<BookCard book={book} />);
    const button = screen.getByTestId("fav-button");
    userEvent.click(button);
    const favorite = global.localStorage.getItem("favorites");
    expect(favorite).toBeTruthy();
  });

  test("removes book from favorites", () => {
    render(<BookCard book={book} />);
    const button = screen.getByTestId("fav-button");
    userEvent.click(button);
    const favorite = global.localStorage.getItem("favorites");
    expect(favorite).not.toContain('title: "Iliad"');
  });
});
