import {
   Button,
   IconButton,
   Menu,
   MenuItem,
   Tooltip,
   Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState, type MouseEvent } from "react";
import useLogout from "../../hooks/useLogout/useLogout";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import { useNavigate } from "react-router-dom";

interface SettingItem {
   title: string;
   linkTo?: string;
}

const AccountBtn = () => {
   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
   const { logout } = useLogout();
   const { user } = useAuthentication();
   const navigate = useNavigate();
   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const settings: SettingItem[] = [
      {
         title: "Account",
         linkTo: "/member/account",
      },
      {
         title: "View Orders",
         linkTo: user?.role === "admin" ? "/admin/orders" : "/member/orders",
      },
      {
         title: "Logout",
      },
   ];

   return (
      <>
         <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <AccountCircle color="primary" />
            </IconButton>
         </Tooltip>
         <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
         >
            {settings.map((setting) => (
               <MenuItem
                  key={setting.title}
                  onClick={() => {
                     handleCloseUserMenu();
                     if (setting.linkTo) {
                        // Navigate to the link
                        navigate(setting.linkTo);
                     } else if (setting.title === "Logout") {
                        logout();
                     }
                  }}
               >
                  {setting.linkTo ? (
                     <Typography sx={{ textAlign: "center" }}>
                        {setting.title}
                     </Typography>
                  ) : (
                     <Typography
                        sx={{ textAlign: "center" }}
                        component={Button}
                        onClick={logout}
                     >
                        {setting.title}
                     </Typography>
                  )}
               </MenuItem>
            ))}
         </Menu>
      </>
   );
};

export default AccountBtn;
