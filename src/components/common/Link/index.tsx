import { FC } from "react";
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const Link: FC<LinkProps> = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <RouterLink className={`link${match ? "-active" : ""}`} to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
