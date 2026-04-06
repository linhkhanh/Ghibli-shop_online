import { type MouseEvent, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoviesList } from "../../utils/mockData";

export default function MoviesListButton() {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
               margin: "16px auto",
               color: "inherit",
            }}
         >
            Ghibli Movies
         </Button>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
               list: {
                  "aria-labelledby": "basic-button",
               },
            }}
         >
            {MoviesList.map((movie) => (
               <MenuItem key={movie.id} onClick={handleClose}>
                  {movie.name}
               </MenuItem>
            ))}
         </Menu>
      </div>
   );
}
