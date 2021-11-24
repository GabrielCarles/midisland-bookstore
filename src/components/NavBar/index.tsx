import Link from "components/common/Link";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const NavBar: FC = () => {
  const { t } = useTranslation();
  return (
    <ul className="nav_container">
      <li>
        <Link to="/">
          <p>{t("home_nav")}</p>
        </Link>
      </li>
      <li>
        <Link to="/kids">
          <p>{t("kids_nav")}</p>
        </Link>
      </li>
      <li>
        <Link to="/romance">
          <p>{t("romance_nav")}</p>
        </Link>
      </li>
      <li>
        <Link to="/thriller">
          <p>{t("thriller_nav")}</p>
        </Link>
      </li>
      <li>
        <Link to="/cooking">
          <p>{t("cooking_nav")}</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
