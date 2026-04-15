import { Modal, Box } from "@mui/material";
import ProductUpsertForm from "../ProductUpsertForm/ProductUpsertForm";
import type { ProductData } from "../../utils/dataType";

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

interface ProductUpsertModalProps {
   open: boolean;
   handleClose: () => void;
   title: string;
   defaultValues?: ProductData;
}

const ProductUpsertModal = (props: ProductUpsertModalProps) => {
   const { open, handleClose, title, defaultValues } = props;
   return (
      <Modal open={open} onClose={handleClose}>
         <Box sx={modalStyle}>
            <ProductUpsertForm
               title={title}
               defaultValues={defaultValues}
               handleSubmit={handleClose}
            />
         </Box>
      </Modal>
   );
};

export default ProductUpsertModal;
