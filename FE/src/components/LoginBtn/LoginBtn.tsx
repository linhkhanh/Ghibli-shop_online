import { Button } from "@mui/material";

interface LoginBtnProps {
   handleLogin: () => void;
}

const LoginBtn = ({ handleLogin }: LoginBtnProps) => {
   return (
      <Button variant="contained" onClick={handleLogin}>
         Login
      </Button>
   );
};

export default LoginBtn;
