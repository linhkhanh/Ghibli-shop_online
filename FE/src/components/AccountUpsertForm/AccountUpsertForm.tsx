import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import useUpdateAccount from "../../hooks/useUpdateAccount/useUpdateAccount";

export interface AccountFormValues {
   name: string;
   email: string;
   phone: string;
   address: string;
}

// interface AccountUpsertFormProps {
//    onSubmit: (values: AccountFormValues) => void;
// }

const AccountUpsertForm = () => {
   const { user } = useAuthentication();
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<AccountFormValues>({
      defaultValues: {
         name: user?.name || "",
         email: user?.email || "",
         phone: user?.phone || "",
         address: user?.address || "",
      },
   });

   const { updateAccountInfo, loading } = useUpdateAccount();

   const onSubmit = async (data: AccountFormValues) => {
      await updateAccountInfo(data);
   };
   return (
      <Box sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
         <Typography
            variant="h6"
            fontWeight={700}
            gutterBottom
            color="primary.main"
         >
            Update Account Information
         </Typography>
         <Divider sx={{ mb: 3 }} />
         <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
               name="name"
               control={control}
               rules={{ required: "Name is required" }}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="Name"
                     fullWidth
                     margin="normal"
                     error={!!errors.name}
                     helperText={errors.name?.message}
                  />
               )}
            />
            <Controller
               name="email"
               control={control}
               rules={{
                  required: "Email is required",
                  pattern: {
                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                     message: "Invalid email address",
                  },
               }}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="Email"
                     type="email"
                     fullWidth
                     margin="normal"
                     error={!!errors.email}
                     helperText={errors.email?.message}
                  />
               )}
            />
            <Controller
               name="phone"
               control={control}
               rules={{
                  pattern: {
                     value: /^\+?\d{7,15}$/,
                     message: "Invalid phone number",
                  },
               }}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="Phone Number"
                     fullWidth
                     margin="normal"
                     error={!!errors.phone}
                     helperText={errors.phone?.message}
                  />
               )}
            />
            <Controller
               name="address"
               control={control}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="Address"
                     fullWidth
                     margin="normal"
                     error={!!errors.address}
                     helperText={errors.address?.message}
                  />
               )}
            />
            <Button
               type="submit"
               variant="contained"
               color="primary"
               fullWidth
               sx={{ mt: 3 }}
               disabled={loading}
            >
               {loading ? "Saving..." : "Save"}
            </Button>
         </form>
      </Box>
   );
};

export default AccountUpsertForm;
