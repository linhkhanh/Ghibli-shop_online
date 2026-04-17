import { useState } from "react";
import { useSnackbar } from "../useSnackBar/useSnackBar";

// TODO: Implement API call to delete product by id, handle loading and error states
const useDeleteProduct = () => {
   const [isDeleting, setIsDeleting] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const { showSnackbar } = useSnackbar();

   const deleteProduct = async (productId: number) => {
      setIsDeleting(true);
      setError(null);
      try {
         // Simulate API call with a delay
         await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (err) {
         setError(`Failed to delete product. Please try again. ${err}`);
         showSnackbar(
            `Failed to delete product. Please try again. ${err}`,
            "error",
         );
      } finally {
         setIsDeleting(false);
      }
   };

   return { deleteProduct, isDeleting, error };
};

export default useDeleteProduct;
