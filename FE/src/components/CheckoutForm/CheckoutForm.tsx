import React, { useEffect } from "react";
import {
   Box,
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
   Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSnackbar } from "../../hooks/useSnackBar/useSnackBar";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

interface CheckoutFormData {
   name: string;
   email: string;
   phone: string;
   shippingAddress: string;
   paymentMethod: string;
}

const defaultValues: CheckoutFormData = {
   name: "",
   email: "",
   phone: "",
   shippingAddress: "",
   paymentMethod: "cash",
};

const CheckoutForm = () => {
   const { showSnackbar } = useSnackbar();
   const { updateCart, user } = useAuthentication();

   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<CheckoutFormData>({
      defaultValues,
   });

   // Prefill form with user info if available
   useEffect(() => {
      if (user) {
         reset({
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            shippingAddress: user.address || "",
            paymentMethod: "cash",
         });
      }
   }, [user]);

   // TODO: Handle checkout logic, e.g., API call, clear cart
   const onSubmit = (data: CheckoutFormData) => {
      console.log("Checkout data:", data);
      showSnackbar("Checkout successful!", "success");
      updateCart(0); // TODO: remove this line when fetching real data
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onSubmit)}
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 500,
            mx: "auto",
            p: 3,
            boxShadow: 2,
            borderRadius: 2,
            bgcolor: "background.paper",
         }}
      >
         <Typography variant="h5" component="h2" gutterBottom>
            Checkout Information
         </Typography>

         <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
               <TextField
                  label="Name"
                  {...field}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  fullWidth
               />
            )}
         />

         <Controller
            name="email"
            control={control}
            rules={{
               required: "Email is required",
               pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
               },
            }}
            render={({ field }) => (
               <TextField
                  label="Email"
                  type="email"
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
               />
            )}
         />

         <Controller
            name="phone"
            control={control}
            rules={{
               required: "Phone number is required",
               pattern: {
                  value: /^\+?[\d\s\-()]+$/,
                  message: "Invalid phone number",
               },
            }}
            render={({ field }) => (
               <TextField
                  label="Phone"
                  type="tel"
                  {...field}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  fullWidth
               />
            )}
         />

         <Controller
            name="shippingAddress"
            control={control}
            rules={{ required: "Shipping address is required" }}
            render={({ field }) => (
               <TextField
                  label="Shipping Address"
                  {...field}
                  error={!!errors.shippingAddress}
                  helperText={errors.shippingAddress?.message}
                  fullWidth
                  multiline
                  minRows={3}
               />
            )}
         />

         <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Payment method is required" }}
            render={({ field }) => (
               <FormControl fullWidth error={!!errors.paymentMethod}>
                  <InputLabel>Payment Method</InputLabel>
                  <Select {...field} label="Payment Method">
                     <MenuItem value="cash">Cash</MenuItem>
                  </Select>
                  {errors.paymentMethod && (
                     <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                        {errors.paymentMethod.message}
                     </Typography>
                  )}
               </FormControl>
            )}
         />

         <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
               type="submit"
               variant="contained"
               color="primary"
               size="large"
            >
               Checkout
            </Button>
            <Button
               variant="outlined"
               size="large"
               component={Link}
               to="/products"
            >
               Continue Shopping
            </Button>
         </Box>
      </Box>
   );
};

export default CheckoutForm;
