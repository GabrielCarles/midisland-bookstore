import Link from "components/common/Link";
import { UserContext } from "context/UserContext";
import { FC, useContext } from "react";

const UserSection: FC = () => {
  const { userInfo, userLogOut } = useContext(UserContext);
  return (
    <section className="user_section">
      <article className="user_section-log_info">
        {userInfo && <p>{userInfo.user}</p>}
        <section className="user_section-log_buttons">
          {userInfo ? (
            <button data-testid="button-logout" onClick={() => userLogOut?.()}>{"Log out"}</button>
          ) : (
            <article data-testid="login-signup-buttons">
              <Link to="/authenticate?type=login">{"Log In"}</Link>
              <Link to="/authenticate?type=signup">{"Sign Up"}</Link>
            </article>
          )}
          {userInfo && userInfo.type === "admin" && (
            <Link to="/users">{"Users"}</Link>
          )}
        </section>
      </article>
    </section>
  );
};

export default UserSection;
