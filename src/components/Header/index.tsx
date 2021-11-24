import React, { FC } from "react";
import Favorites from "components/Favorites";
import UserSection from "components/UserSection";
import ThemeSelector from "components/ThemeSelector";

const Header: FC = () => {
  // Sorry, didn't have time to make a logo for it :(
  return (
    <header className="header">
      <section className="header-logo">
        <p>MIB</p>
        <p>Mid Island Bookstore</p>
      </section>
      <section className="header-actions">
        <Favorites />
        <article className="header-actions_user">
          <ThemeSelector />
          <UserSection />
        </article>
      </section>
    </header>
  );
};

export default Header;
