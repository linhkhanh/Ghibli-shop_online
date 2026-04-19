import { useState } from "react";
import { useSnackbar } from "../useSnackBar/useSnackBar";
import { deleteProduct } from "../../services/deleteProduct/deleteProduct";

// TODO: Implement API call to delete product by id, handle loading and error states
const useDeleteProduct = () => {
   const [isDeleting, setIsDeleting] = useState(false);
   const { showSnackbar } = useSnackbar();

   const deleteProductById = async (productId: number) => {
      setIsDeleting(true);
      try {
         await deleteProduct(productId);
         showSnackbar("Product deleted successfully!", "success");
      } catch (err) {
         showSnackbar(
            `Failed to delete product: ${err instanceof Error ? err.message : "Unknown error"}`,
            "error",
         );
      } finally {
         setIsDeleting(false);
      }
   };

   return { deleteProductById, isDeleting };
};

export default useDeleteProduct;
