import { Box, Button, TextField, Typography, Stack, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import useRegister from "../../hooks/useRegister/useRegister";

interface RegisterFormInputs {
   name: string;
   email: string;
   password: string;
   confirmedPassword: string;
}

interface RegisterFormProps {
   handleCurrentForm: () => void;
   closeModal: () => void;
}
const RegisterForm = (props: RegisterFormProps) => {
   const { handleCurrentForm, closeModal } = props;
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<RegisterFormInputs>();

   const { createUser } = useRegister();

   const onRegister = async (data: RegisterFormInputs) => {
      if (data.password !== data.confirmedPassword) {
         // Set error for confirmPassword
         alert("Passwords do not match");
         return;
      }
      await createUser(data);
      closeModal();
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onRegister)}
         sx={{
            maxWidth: 400,
            mx: "auto",
            p: 4,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
         }}
      >
         <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
            Register
         </Typography>
         <Stack spacing={3}>
            <TextField
               label="Name"
               sx={{ width: 320 }}
               {...register("name", {
                  required: "Name is required",
                  minLength: {
                     value: 2,
                     message: "Name must be at least 2 characters",
                  },
               })}
               error={!!errors.name}
               helperText={errors.name?.message}
            />
            <TextField
               label="Email"
               type="email"
               sx={{ width: 320 }}
               {...register("email", {
                  required: "Email is required",
                  pattern: {
                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                     message: "Invalid email format",
                  },
               })}
               error={!!errors.email}
               helperText={errors.email?.message}
            />
            <TextField
               label="Password"
               type="password"
               sx={{ width: 320 }}
               {...register("password", {
                  required: "Password is required",
                  minLength: {
                     value: 6,
                     message: "Password must be at least 6 characters",
                  },
               })}
               error={!!errors.password}
               helperText={errors.password?.message}
            />
            <TextField
               label="Confirm Password"
               type="password"
               sx={{ width: 320 }}
               {...register("confirmedPassword", {
                  required: "Please confirm your password",
                  validate: (value, formValues) =>
                     value === formValues.password || "Passwords do not match",
               })}
               error={!!errors.confirmedPassword}
               helperText={errors.confirmedPassword?.message}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
               Register
            </Button>
         </Stack>
         <Typography mt={3} textAlign="center" variant="body2">
            Already have an account?{" "}
            <Link
               href="#"
               color="primary"
               underline="hover"
               onClick={handleCurrentForm}
            >
               Login
            </Link>
         </Typography>
      </Box>
   );
};

export default RegisterForm;
