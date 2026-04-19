import { getMovies } from "../../services/getMovies/getMovies";
import type { MovieCategory } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useGetMovies = () => {
   const { showSnackbar } = useSnackbar();
   const getListMovies = async (): Promise<MovieCategory[]> => {
      try {
         const movies = await getMovies();
         return movies;
      } catch (error) {
         showSnackbar(
            "Failed to fetch movies: " +
               (error instanceof Error ? error.message : String(error)),
            "error",
         );
         return [];
      }
   };

   return { getListMovies };
};

export default useGetMovies;
