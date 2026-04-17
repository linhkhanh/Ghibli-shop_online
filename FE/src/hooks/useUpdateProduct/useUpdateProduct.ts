import { useState } from "react";
import { updateProduct } from "../../services/updateProduct/updateProduct";
import uploadImage from "../../services/uploadImage/uploadImage";
import type { ProductData } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface EditProductData extends ProductData {
   id: number;
}

const useUpdateProduct = () => {
   const { showSnackbar } = useSnackbar();
   const [loading, setLoading] = useState<boolean>(false);

   const editProduct = async (productInfo: EditProductData) => {
      const uploadImagesList = productInfo.images.map(
         async (imgItem, index) => {
            if (typeof imgItem === "string") return imgItem;

            const {
               uploadedImage,
               loading: uploadLoading,
               error: uploadError,
            } = await uploadImage({ imageFile: imgItem });

            if (uploadError) {
               showSnackbar(
                  `Failed to upload image ${index + 1}. Please try again.`,
                  "error",
               );

               setLoading(uploadLoading);
               return null;
            }

            return uploadedImage;
         },
      );

      const resolvedImages = await Promise.all(uploadImagesList);
      try {
         const res = await updateProduct({
            id: productInfo.id,
            title: productInfo.title,
            description: productInfo.description,
            price: productInfo.price,
            stock: productInfo.stock,
            discount: productInfo.discount,
            movie_id: productInfo.movieId,
            images: resolvedImages as string[],
         });
         showSnackbar(res.message, "success");
         return res;
      } catch (error) {
         console.error("Error updating product:", error);
         showSnackbar("Failed to update product", "error");
      }
   };

   return { editProduct, loading };
};

export default useUpdateProduct;
