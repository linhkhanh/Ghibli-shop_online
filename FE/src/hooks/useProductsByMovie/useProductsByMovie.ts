import type { ProductsByCategory } from "../../utils/dataType";
import { mockProductsByMovie } from "../../utils/mockData";

// TODO: Replace with real API call when backend is ready
const useProductsByMovie = (movieId: string): ProductsByCategory => {
   return (
      mockProductsByMovie.find((item) => item.movie.id === movieId) ||
      mockProductsByMovie[0]
   );
};

export default useProductsByMovie;
