import api from "../api/axios";

interface GetProductsByMovieIdProps {
   movieId: string;
   limit?: number;
   page?: number;
}

export const getProductsByMovieId = async ({
   movieId,
   limit,
   page,
}: GetProductsByMovieIdProps) => {
   try {
      const response = await api.get(
         `movies/${movieId}/products?limit=${limit}&page=${page}`,
      );
      return {
         success: true,
         data: response.data.data.data,
         lastPage: response.data.data.last_page,
      };
   } catch (error) {
      throw new Error(
         error instanceof Error
            ? error.message
            : "Failed to fetch products by movie ID",
      );
   }
};
