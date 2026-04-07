import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState, type MouseEvent } from "react";

const settings = ["Profile", "View Orders", "Logout"];

const AccountBtn = () => {
   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

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
               <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                     {setting}
                  </Typography>
               </MenuItem>
            ))}
         </Menu>
      </>
   );
};

export default AccountBtn;
