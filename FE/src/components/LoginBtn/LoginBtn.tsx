import { Button, Modal, Box } from "@mui/material";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const modalStyle = {
   position: "absolute" as const,
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   bgcolor: "background.paper",
   boxShadow: 24,
   borderRadius: 3,
   p: 0,
   outline: "none",
};

interface LoginBtnProps {
   handleLogin: () => void;
}

const LoginBtn = (props: LoginBtnProps) => {
   const { handleLogin } = props;

   const [currentForm, setCurrentForm] = useState<"login" | "register">(
      "login",
   );

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => {
      setOpen(false);
      handleLogin();
   };

   return (
      <>
         <Button variant="contained" onClick={handleOpen}>
            Login
         </Button>
         <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
               {currentForm === "login" ? (
                  <LoginForm
                     handleCurrentForm={() => setCurrentForm("register")}
                  />
               ) : (
                  <RegisterForm
                     handleCurrentForm={() => setCurrentForm("login")}
                  />
               )}
            </Box>
         </Modal>
      </>
   );
};

export default LoginBtn;
