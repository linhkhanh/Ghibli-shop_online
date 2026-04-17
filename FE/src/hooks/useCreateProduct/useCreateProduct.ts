import { useState } from "react";
import { createProduct } from "../../services/createProduct/createProduct";
import uploadImage from "../../services/uploadImage/uploadImage";
import type { ProductData, ProductItem } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useCreateProduct = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const { showSnackbar } = useSnackbar();

   const createNewProduct = async (
      productData: ProductData | ProductItem,
   ): Promise<{ loading: boolean }> => {
      setLoading(true);

      const uploadImagesList = productData.images.map(
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
         await createProduct({
            title: productData.title,
            description: productData.description,
            price: productData.price,
            stock: productData.stock,
            discount: productData.discount,
            movie_id: productData.movieId,
            images: resolvedImages as string[],
         });
      } catch (err: unknown) {
         showSnackbar(
            err instanceof Error ? err.message : "Failed to create product",
            "error",
         );
      } finally {
         setLoading(false);
      }

      return {
         loading,
      };
   };

   return { createNewProduct };
};

export default useCreateProduct;
