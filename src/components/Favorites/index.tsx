import { FC } from "react";
import { IoHeartOutline } from "react-icons/io5";
import Link from "components/common/Link";

const Favorites: FC = () => {
  return (
    <article className="favorites">
      <Link to="/whishlist">
        <IoHeartOutline size={30} />
      </Link>
    </article>
  );
};

export default Favorites;
