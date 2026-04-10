import {
   Box,
   Button,
   TextField,
   Typography,
   Stack,
   Alert,
   Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface RegisterFormInputs {
   name: string;
   email: string;
   password: string;
}

interface RegisterFormProps {
   handleCurrentForm: () => void;
}
const RegisterForm = (props: RegisterFormProps) => {
   const { handleCurrentForm } = props;
   const [registerSuccess, setRegisterSuccess] = useState("");
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<RegisterFormInputs>();

   //    TODO: Call API here to register user and handle registration logic
   const onRegister = (data: RegisterFormInputs) => {
      console.log("Registration data:", data);
      setRegisterSuccess("");
      setRegisterSuccess("Registration successful! You can now log in.");
      reset();
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
            {registerSuccess && (
               <Alert severity="success">{registerSuccess}</Alert>
            )}
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
