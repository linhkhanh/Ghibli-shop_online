import api from "../api/axios";

interface SearchParams {
   keyword: string;
   page: number;
}

export const searchByKeyword = async ({ keyword, page }: SearchParams) => {
   try {
      const response = await api.get("/products", {
         params: {
            search: keyword,
            page,
         },
      });

      return {
         success: true,
         data: response.data.data.data,
         lastPage: response.data.data.last_page,
      };
   } catch (error) {
      throw new Error(
         error instanceof Error ? error.message : "Failed to fetch products",
      );
   }
};
