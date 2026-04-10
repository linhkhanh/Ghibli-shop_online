import {
   Box,
   Button,
   TextField,
   Typography,
   Link,
   Stack,
   Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface LoginFormInputs {
   email: string;
   password: string;
}

const FAKE_USER = {
   email: "user@example.com",
   password: "password123",
};

interface LoginFormProps {
   handleCurrentForm: () => void;
}

const LoginForm = (props: LoginFormProps) => {
   const { handleCurrentForm } = props;
   const [authError, setAuthError] = useState("");
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<LoginFormInputs>();

   const onSubmit = (data: LoginFormInputs) => {
      setAuthError("");
      // Simulate authentication
      if (
         data.email === FAKE_USER.email &&
         data.password === FAKE_USER.password
      ) {
         // Success: redirect or show success message
         alert("Login successful!");
         reset();
      } else {
         setAuthError("Invalid email or password.");
      }
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onSubmit)}
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
            Login
         </Typography>
         <Stack spacing={3}>
            <TextField
               label="Email"
               type="email"
               fullWidth
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
               fullWidth
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
            {authError && <Alert severity="error">{authError}</Alert>}
            <Button type="submit" variant="contained" color="primary" fullWidth>
               Login
            </Button>
         </Stack>
         <Typography mt={3} textAlign="center" variant="body2">
            Don't have an account?{" "}
            <Link
               href="#"
               color="primary"
               underline="hover"
               onClick={handleCurrentForm}
            >
               Register
            </Link>
         </Typography>
      </Box>
   );
};

export default LoginForm;
