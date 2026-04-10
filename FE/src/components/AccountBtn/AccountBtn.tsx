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
import StyledLink from "../StyledLink/StyledLink";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

interface SettingItem {
   title: string;
   linkTo?: string;
}

const settings: SettingItem[] = [
   {
      title: "Account",
      linkTo: "/",
   },
   {
      title: "View Orders",
      linkTo: "/member/orders",
   },
   {
      title: "Logout",
   },
];

const AccountBtn = () => {
   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
   const { updateUser } = useAuthentication();

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
               <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  {setting.linkTo ? (
                     <StyledLink path={setting.linkTo}>
                        <Typography sx={{ textAlign: "center" }}>
                           {setting.title}
                        </Typography>
                     </StyledLink>
                  ) : (
                     <Typography
                        sx={{ textAlign: "center" }}
                        component={Button}
                        onClick={() => updateUser(null)}
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
