import uploadImage from "../../services/uploadImage/uploadImage";
import type { ProductData } from "../../utils/dataType";

const useCreateProduct = () => {
   //    TODO: Call API to create product here, return loading state and error state if needed
   const createProduct = async (
      productData: ProductData,
   ): Promise<{ loading: boolean; error: string | null }> => {
      let loading: boolean = true;
      let error: string | null = null;

      const imageList = productData.images.map(async (file, index) => {
         const {
            uploadedImage,
            loading: uploadLoading,
            error: uploadError,
         } = await uploadImage({ imageFile: file });

         if (uploadError) {
            console.error(`Error uploading image ${index + 1}:`, uploadError);
            error = `Failed to upload image ${index + 1}. Please try again.`;
            loading = uploadLoading;
            return null;
         }

         return uploadedImage;
      });
      console.log("Creating product with data:", {
         ...productData,
         images: imageList,
      });

      //   TODO: Call API to create product with the above data, handle loading and error states accordingly
      return {
         loading,
         error,
      };
   };

   return { createProduct };
};

export default useCreateProduct;
