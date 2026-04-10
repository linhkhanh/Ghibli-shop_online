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
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import { mockUser } from "../../utils/mockData";

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
   handleLogin: () => void;
}

const LoginForm = (props: LoginFormProps) => {
   const { handleCurrentForm, handleLogin: closeModal } = props;
   const { updateUser } = useAuthentication();
   const [authError, setAuthError] = useState("");
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<LoginFormInputs>();

   //    TODO: Call API here to authenticate user and handle login logic
   const onLogin = (data: LoginFormInputs) => {
      // fake call API, replace with real API call later
      // use try catch block to handle error if call API fails
      // setAuthError to display error message if login fails
      // updateUser to update user info in context if login successful
      setAuthError("");
      if (
         data.email === FAKE_USER.email &&
         data.password === FAKE_USER.password
      ) {
         alert("Login successful!");
         updateUser(mockUser);
         reset();
         closeModal();
      } else {
         setAuthError("Invalid email or password.");
      }
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onLogin)}
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
               sx={{
                  width: "320px",
               }}
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
               sx={{
                  width: "320px",
               }}
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
