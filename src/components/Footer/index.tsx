import LanguageSelector from "components/LanguageSelector";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer_container">
      <section className="footer_container-information">
        <h1>Mid Island Bookstore</h1>
        <p>1234 Some St</p>
        <p>Nanaimo, BC</p>
      </section>
      <LanguageSelector />
    </footer>
  );
};

export default Footer;
