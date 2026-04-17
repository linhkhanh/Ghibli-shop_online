import { type MouseEvent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import StyledLink from "../StyledLink/StyledLink";
import useGetMovies from "../../hooks/useGetMovies/useGetMovies";
import type { MovieCategory } from "../../utils/dataType";

export default function MoviesListButton() {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const { getListMovies } = useGetMovies();
   const [moviesList, setMoviesList] = useState<MovieCategory[]>([]);

   const open = Boolean(anchorEl);
   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   useEffect(() => {
      const fetchMovies = async () => {
         const movies = await getListMovies();
         setMoviesList(movies);
      };
      fetchMovies();
   }, []);

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
            {moviesList.map((movie) => (
               <MenuItem key={movie.id} onClick={handleClose}>
                  <StyledLink path={"products-by-movie/" + movie.id}>
                     {movie.title}
                  </StyledLink>
               </MenuItem>
            ))}
         </Menu>
      </div>
   );
}
