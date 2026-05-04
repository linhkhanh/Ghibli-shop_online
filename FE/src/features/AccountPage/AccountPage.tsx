import { Box, Paper, Typography, Divider, Button } from "@mui/material";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import { useState } from "react";
import AccountUpsertModal from "../../components/AccountUpsertModal/AccountUpsertModal";

const AccountPage = () => {
   const { user } = useAuthentication();
   const [openEdit, setOpenEdit] = useState(false);
   const handleOpen = () => setOpenEdit(true);
   const handleClose = () => setOpenEdit(false);

   return (
      <Box sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
         <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Box
               display="flex"
               justifyContent="space-between"
               alignItems="center"
            >
               <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color="primary.main"
               >
                  Account Information
               </Typography>
               <Button variant="outlined" color="primary" onClick={handleOpen}>
                  Edit
               </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Box mb={2}>
               <Typography variant="body2" color="text.secondary">
                  Name
               </Typography>
               <Typography variant="body1" fontWeight={500}>
                  {user?.name || "-"}
               </Typography>
            </Box>
            <Box mb={2}>
               <Typography variant="body2" color="text.secondary">
                  Email
               </Typography>
               <Typography variant="body1" fontWeight={500}>
                  {user?.email || "-"}
               </Typography>
            </Box>
            <Box mb={2}>
               <Typography variant="body2" color="text.secondary">
                  Phone Number
               </Typography>
               <Typography variant="body1" fontWeight={500}>
                  {user?.phone || "-"}
               </Typography>
            </Box>
            <Box mb={2}>
               <Typography variant="body2" color="text.secondary">
                  Address
               </Typography>
               <Typography variant="body1" fontWeight={500}>
                  {user?.address || "-"}
               </Typography>
            </Box>
         </Paper>
         <AccountUpsertModal open={openEdit} handleClose={handleClose} />
      </Box>
   );
};

export default AccountPage;
