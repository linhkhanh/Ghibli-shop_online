import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StyleLinkProps {
   children: ReactNode;
   path: string;
}

const StyledLink = (props: StyleLinkProps) => {
   const { path, children } = props;

   return (
      <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
         {children}
      </Link>
   );
};

export default StyledLink;
