import { useState } from "react";
import { Button } from "@mui/material";
import ProductUpsertModal from "../../components/ProductUpsertModal/ProductUpsertModal";

const CreateProduct = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Button variant="contained" color="primary" onClick={handleOpen}>
            Create
         </Button>
         <ProductUpsertModal
            open={open}
            handleClose={handleClose}
            title="Create Product"
         />
      </>
   );
};

export default CreateProduct;
