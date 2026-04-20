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
import type {
   MovieCategory,
   ProductData,
   ProductItem,
} from "../../utils/dataType";
import useCreateProduct from "../../hooks/useCreateProduct/useCreateProduct";
import useGetMovies from "../../hooks/useGetMovies/useGetMovies";
import useUpdateProduct from "../../hooks/useUpdateProduct/useUpdateProduct";

interface ProductUpsertFormProps {
   defaultValues?: ProductData | ProductItem;
   title: "Edit Product" | "Create Product";
   handleSubmit: () => void;
}

const ProductUpsertForm = (props: ProductUpsertFormProps) => {
   const {
      defaultValues = {
         images: [],
         movieId: 1,
      },
      title,
      handleSubmit: closeModal,
   } = props;
   const { createNewProduct } = useCreateProduct();
   const { editProduct } = useUpdateProduct();
   const { getListMovies } = useGetMovies();

   const [moviesList, setMoviesList] = useState<MovieCategory[]>([]);
   const [isDisabled, setIsDisabled] = useState<boolean>(false);

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
      setValue,
      watch,
      setError,
      clearErrors,
   } = useForm<ProductData | ProductItem>({
      defaultValues,
   });

   const onUpSert = async (inputProData: ProductData | ProductItem) => {
      if (!inputProData.images || inputProData.images.length === 0) {
         setError("images", {
            type: "manual",
            message: "At least one image is required.",
         });
         return;
      }

      if (title === "Edit Product") {
         setIsDisabled(true);
         await editProduct({
            ...inputProData,
            id: (defaultValues as ProductItem).id,
         });
      } else {
         setIsDisabled(true);
         await createNewProduct(inputProData);
      }
      closeModal();
      window.location.reload();
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
         const mergedFiles = prevFiles.filter((file) => file instanceof File);

         const uploadedFiles = prevFiles.filter(
            (file) => typeof file === "string",
         );

         validFiles.forEach((file) => {
            if (
               !mergedFiles.some(
                  (f) => f.name === file.name && f.size === file.size,
               )
            ) {
               mergedFiles.push(file);
            }
         });
         setValue("images", [...uploadedFiles, ...mergedFiles]);
      }
   };

   const selectedImages = watch("images");

   const [imagePreviews, setImagePreviews] = useState<string[]>([]);

   useEffect(() => {
      if (selectedImages && selectedImages.length > 0) {
         const urls = selectedImages.map((file: File | string) =>
            file instanceof File ? URL.createObjectURL(file) : file,
         );
         setImagePreviews(urls);
         return () => {
            urls.forEach((url) => {
               if (url.startsWith("blob:")) {
                  URL.revokeObjectURL(url);
               }
            });
         };
      } else {
         setImagePreviews([]);
      }
   }, [selectedImages]);

   // Remove image handler
   const handleRemoveImage = (idxToRemove: number) => {
      if (selectedImages && selectedImages.length > 0) {
         const newImages = selectedImages.filter(
            (_: File | string, idx: number) => idx !== idxToRemove,
         );
         setValue("images", newImages);
      }
   };

   useEffect(() => {
      const fetchMovies = async () => {
         const movies = await getListMovies();
         setMoviesList(movies);
      };
      fetchMovies();
   }, []);

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onUpSert)}
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
            {title}
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
                        {selectedImages.map(
                           (file: File | string, idx: number) => (
                              <Box key={idx} position="relative" padding={0.5}>
                                 <Chip
                                    label={
                                       file instanceof File
                                          ? file.name
                                          : "Existing Image"
                                    }
                                    onDelete={() => handleRemoveImage(idx)}
                                    avatar={
                                       <img
                                          src={imagePreviews[idx]}
                                          alt={
                                             file instanceof File
                                                ? file.name
                                                : "Existing Image"
                                          }
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
                           ),
                        )}
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
                                          {movie.title}
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

                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     fullWidth
                     disabled={isDisabled}
                  >
                     Submit
                  </Button>
               </Stack>
            </Grid>
         </Grid>
      </Box>
   );
};

export default ProductUpsertForm;
