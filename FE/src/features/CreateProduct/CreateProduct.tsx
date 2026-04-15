import { useState } from "react";
import { Button } from "@mui/material";
import CreateProductModal from "../../components/CreateProductModal/CreateProductModal";

const CreateProduct = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Button variant="contained" color="primary" onClick={handleOpen}>
            Create
         </Button>
         <CreateProductModal
            open={open}
            handleClose={handleClose}
            title="Create Product"
         />
      </>
   );
};

export default CreateProduct;
