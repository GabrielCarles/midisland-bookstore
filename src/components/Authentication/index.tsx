import { FC, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UserContext } from "context/UserContext";
import { signUp as userSignUp } from "services/util/userHelper";

interface IFormSignUp {
  user: string;
  email: string;
  password: string;
  type: string;
}
interface IFormLogin {
  email: string;
  password: string;
}

/* Definitely not proud of this component, it needs a massive refactor... */

const Authentication: FC = () => {
  const { userLogIn } = useContext(UserContext);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const isLogIn = searchParams.get("type") === "login";

  const logIn: SubmitHandler<IFormLogin> = (data) => {
    try {
      userLogIn?.(data);
    } catch (error) {
      setMessage(t("user_not_found"));
    }
  };

  const signUp: SubmitHandler<IFormSignUp> = (data) => {
    const user = Object.assign(data, { userId: 0 });
    userSignUp?.(user);
    userLogIn?.({ email: data.email, password: data.password });
  };

  const onSubmit = isLogIn ? logIn : signUp;
  return (
    <section className="authentication">
      <form className="authentication-form" onSubmit={handleSubmit(onSubmit)}>
        {!isLogIn && (
          <>
            <label>{t("user_name")}</label>
            <input
              data-testid="user-input"
              {...register("user", { required: true, maxLength: 20 })}
            />
          </>
        )}
        <label>{t("user_email")}</label>
        <input
          data-testid="email-input"
          {...register("email", { required: true })}
          type="email"
        />
        <label>{t("user_password")}</label>
        <input
          data-testid="password-input"
          {...register("password", { required: true })}
          type="password"
        />
        {!isLogIn && (
          <>
            <label>{t("user_type")}</label>
            <select
              data-testid="type-input"
              {...register("type", { required: true })}
            >
              <option value="admin">{t("type_admin")}</option>
              <option value="user">{t("type_user")}</option>
            </select>
          </>
        )}
        <div className="authentication-form_submit">
          <button data-testid="submit-form" type="submit">
            {!isLogIn ? t("user_signup") : t("user_login")}
          </button>
        </div>
      </form>
      {message.length >= 1 && <p>{message}</p>}
    </section>
  );
};

export default Authentication;
