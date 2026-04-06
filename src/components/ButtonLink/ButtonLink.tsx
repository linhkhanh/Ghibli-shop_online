import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface ButtonLinkProps {
   name: string;
   path: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
   const { name, path } = props;
   return (
      <Link
         to={path}
         key={name}
         style={{ textDecoration: "none", color: "inherit" }}
      >
         <Button sx={{ my: 2, color: "black", display: "block" }}>
            {name}
         </Button>
      </Link>
   );
};

export default ButtonLink;
