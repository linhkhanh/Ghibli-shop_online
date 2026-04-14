import axios from "axios";

interface UseUploadImageProps {
   imageFile: File;
}

interface UseUploadImageReturn {
   uploadedImage: string | undefined;
   loading: boolean;
   error: string | null;
}

const useUploadImage = async ({
   imageFile,
}: UseUploadImageProps): Promise<UseUploadImageReturn> => {
   let loading = false;
   let error = null;
   let uploadedUrl = undefined;

   if (!imageFile)
      return {
         uploadedImage: undefined,
         loading,
         error: "No image file provided",
      };

   loading = true;
   const formData = new FormData();
   formData.append("file", imageFile);
   formData.append("upload_preset", "Ghibli_preset");

   try {
      const res = await axios.post(
         "https://api.cloudinary.com/v1_1/dt5rqi1l9/image/upload",
         formData,
      );
      uploadedUrl = res.data.secure_url;

      console.log("Success! Image URL:", uploadedUrl);
   } catch (err) {
      console.error("Upload error", err);
      error = "Failed to upload image. Please try again.";
   } finally {
      loading = false;
   }

   return {
      uploadedImage: uploadedUrl,
      loading,
      error,
   };
};

export default useUploadImage;
