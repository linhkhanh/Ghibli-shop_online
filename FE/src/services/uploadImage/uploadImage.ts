import axios from "axios";

interface UseUploadImageProps {
   imageFile: File;
}

interface UseUploadImageReturn {
   uploadedImage: string | undefined;
   loading: boolean;
   error: string | null;
}

const uploadImage = async ({
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

   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
   const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

   const formData = new FormData();
   formData.append("file", imageFile);
   formData.append("upload_preset", uploadPreset);

   try {
      const res = await axios.post(
         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
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

export default uploadImage;
