import {
   Box,
   Button,
   TextField,
   Typography,
   Stack,
   MenuItem,
   InputLabel,
   Select,
   FormControl,
   Chip,
   FormHelperText,
   Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { moviesList } from "../../utils/mockData";
import uploadImage from "../../utils/uploadImg";

interface CreateProductInputs {
   title: string;
   description: string;
   price: number;
   stock: number;
   discount?: number;
   movieId: string;
   images: File[];
}

const CreateProductForm = () => {
   const [submitSuccess, setSubmitSuccess] = useState("");
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
      reset,
      setValue,
      watch,
      setError,
      clearErrors,
   } = useForm<CreateProductInputs>({
      defaultValues: { images: [], movieId: "" },
   });

   //    TODO: Call API here
   const onCreate = async (data: CreateProductInputs) => {
      if (!data.images || data.images.length === 0) {
         setError("images", {
            type: "manual",
            message: "At least one image is required.",
         });
         return;
      }
      setSubmitSuccess("");
      const imageFiles = data.images;
      const imgUrl = await uploadImage({ imageFile: imageFiles[0] }); // For simplicity, only upload the first image here. You can extend this to upload multiple images if needed.
      console.log("Product data:", data);
      console.log("Uploaded image URL:", imgUrl.uploadedImage);
      setSubmitSuccess("Product created successfully!");
      reset();
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         const files = Array.from(e.target.files);
         // Only allow image files
         const validFiles = files.filter((file) =>
            file.type.startsWith("image/"),
         );
         if (validFiles.length !== files.length) {
            setError("images", {
               type: "manual",
               message: "Only image files are allowed.",
            });
            return;
         } else {
            clearErrors("images");
         }
         const prevFiles =
            selectedImages && Array.isArray(selectedImages)
               ? selectedImages
               : [];
         // Avoid duplicate files by name and size
         const mergedFiles = [...prevFiles];
         validFiles.forEach((file) => {
            if (
               !mergedFiles.some(
                  (f) => f.name === file.name && f.size === file.size,
               )
            ) {
               mergedFiles.push(file);
            }
         });
         setValue("images", mergedFiles);
      }
   };

   const selectedImages = watch("images");

   const [imagePreviews, setImagePreviews] = useState<string[]>([]);

   useEffect(() => {
      if (selectedImages && selectedImages.length > 0) {
         const urls = selectedImages.map((file: File) =>
            URL.createObjectURL(file),
         );
         setImagePreviews(urls);
         return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
         };
      } else {
         setImagePreviews([]);
      }
   }, [selectedImages]);

   // Remove image handler
   const handleRemoveImage = (idxToRemove: number) => {
      if (selectedImages && selectedImages.length > 0) {
         const newImages = selectedImages.filter(
            (_: File, idx: number) => idx !== idxToRemove,
         );
         setValue("images", newImages);
      }
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onCreate)}
         sx={{
            mx: "auto",
            p: 4,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            maxWidth: 1200,
         }}
      >
         <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
            Create Product
         </Typography>
         <Grid container spacing={4} alignItems="flex-start">
            <Grid size={4}>
               <Button
                  variant="outlined"
                  component="label"
                  color={
                     selectedImages && selectedImages.length > 0
                        ? "success"
                        : "primary"
                  }
                  sx={{ width: "100%", minHeight: 56 }}
               >
                  Upload Images
                  <input
                     type="file"
                     hidden
                     multiple
                     accept="image/*"
                     onChange={handleImageChange}
                  />
               </Button>
               {errors.images && (
                  <Typography color="error" mt={1}>
                     {errors.images.message}
                  </Typography>
               )}
               {selectedImages && selectedImages.length > 0 && (
                  <Box mt={2}>
                     <Typography variant="body2" color="text.secondary">
                        {selectedImages.length} image(s) selected
                     </Typography>
                     <Stack direction="column" mt={2} flexWrap="wrap">
                        {selectedImages.map((file: File, idx: number) => (
                           <Box key={idx} position="relative" padding={0.5}>
                              <Chip
                                 label={file.name}
                                 onDelete={() => handleRemoveImage(idx)}
                                 avatar={
                                    <img
                                       src={imagePreviews[idx]}
                                       alt={file.name}
                                       style={{
                                          width: 32,
                                          height: 32,
                                          objectFit: "cover",
                                          borderRadius: 4,
                                       }}
                                    />
                                 }
                                 sx={{ maxWidth: 200, p: 1 }}
                              />
                           </Box>
                        ))}
                     </Stack>
                  </Box>
               )}
            </Grid>
            <Grid size={8}>
               <Stack spacing={3}>
                  <TextField
                     label="Product Title"
                     fullWidth
                     {...register("title", { required: "Title is required" })}
                     error={!!errors.title}
                     helperText={errors.title?.message}
                  />
                  <TextField
                     label="Description"
                     fullWidth
                     multiline
                     minRows={3}
                     {...register("description", {
                        required: "Description is required",
                     })}
                     error={!!errors.description}
                     helperText={errors.description?.message}
                  />
                  <Box>
                     <Box display="flex" gap={2}>
                        <TextField
                           label="Price"
                           type="number"
                           sx={{ flex: 1 }}
                           inputProps={{ min: 0, step: 0.01 }}
                           {...register("price", {
                              required: "Price is required",
                              min: {
                                 value: 0,
                                 message: "Price must be at least 0",
                              },
                           })}
                           error={!!errors.price}
                           helperText={errors.price?.message}
                        />
                        <TextField
                           label="Stock"
                           type="number"
                           sx={{ flex: 1 }}
                           inputProps={{ min: 0, step: 1 }}
                           {...register("stock", {
                              required: "Stock is required",
                              min: {
                                 value: 0,
                                 message: "Stock must be at least 0",
                              },
                           })}
                           error={!!errors.stock}
                           helperText={errors.stock?.message}
                        />
                     </Box>
                  </Box>
                  <Box>
                     <Box display="flex" gap={2}>
                        <TextField
                           label="Discount (%)"
                           type="number"
                           sx={{ flex: 1 }}
                           inputProps={{ min: 0, max: 100, step: 1 }}
                           {...register("discount", {
                              min: {
                                 value: 0,
                                 message: "Discount must be at least 0",
                              },
                              max: {
                                 value: 100,
                                 message: "Discount cannot exceed 100",
                              },
                           })}
                           error={!!errors.discount}
                           helperText={errors.discount?.message}
                        />
                        <FormControl
                           fullWidth
                           error={!!errors.movieId}
                           sx={{ flex: 1 }}
                        >
                           <InputLabel id="movie-category-label">
                              Movie Category
                           </InputLabel>
                           <Controller
                              name="movieId"
                              control={control}
                              rules={{ required: "Movie category is required" }}
                              render={({ field }) => (
                                 <Select
                                    {...field}
                                    labelId="movie-category-label"
                                    label="Movie Category"
                                 >
                                    {moviesList.map((movie) => (
                                       <MenuItem
                                          key={movie.id}
                                          value={movie.id}
                                       >
                                          {movie.name}
                                       </MenuItem>
                                    ))}
                                 </Select>
                              )}
                           />
                           <FormHelperText>
                              {errors.movieId?.message}
                           </FormHelperText>
                        </FormControl>
                     </Box>
                  </Box>
                  {submitSuccess && (
                     <Typography color="success.main" textAlign="center">
                        {submitSuccess}
                     </Typography>
                  )}
                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     fullWidth
                  >
                     Create Product
                  </Button>
               </Stack>
            </Grid>
         </Grid>
      </Box>
   );
};

export default CreateProductForm;
