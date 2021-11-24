import { IUser } from "interfaces/user";
import { FC, useEffect, useState } from "react";
import { getUsers } from "services/util/userHelper";

const UsersList: FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /* this would be the way to go if we had to bring the users from an endpoint
    So Im just mocking behaviour */
    const usersList = getUsers();
    setUsers(usersList);
  }, []);

  if (!users.length) return <p>We cant find that information</p>;

  return (
    <section>
      <ul data-testid="user-list">
        {users.map((user: IUser, idx: number) => (
          <li data-testid="user-list-element" key={idx}>
            {user.user}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
