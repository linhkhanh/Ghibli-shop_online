import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import CreateProductForm from "../../components/CreateProductForm/CreateProductForm";

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
   maxHeight: "90vh",
   overflowY: "auto",
};

const CreateProduct = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Button variant="contained" color="primary" onClick={handleOpen}>
            Create
         </Button>
         <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
               <CreateProductForm />
            </Box>
         </Modal>
      </>
   );
};

export default CreateProduct;
