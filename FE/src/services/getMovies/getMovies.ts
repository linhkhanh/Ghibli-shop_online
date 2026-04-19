import api from "../api/axios";

export const getMovies = async () => {
   try {
      const response = await api.get("/movies");
      return response.data.data;
   } catch (error) {
      throw new Error(
         "Failed to fetch movies: " +
            (error instanceof Error ? error.message : String(error)),
      );
   }
};
