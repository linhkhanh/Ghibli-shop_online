import { Modal, Box } from "@mui/material";
import ProductUpsertForm from "../ProductUpsertForm/ProductUpsertForm";
import type { ProductData } from "../../utils/dataType";
import { useNavigate } from "react-router-dom";

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
   title: "Edit Product" | "Create Product";
   defaultValues?: ProductData;
}

const ProductUpsertModal = (props: ProductUpsertModalProps) => {
   const { open, handleClose, title, defaultValues } = props;
   const navigate = useNavigate();

   return (
      <Modal open={open} onClose={handleClose}>
         <Box sx={modalStyle}>
            <ProductUpsertForm
               title={title}
               defaultValues={defaultValues}
               handleSubmit={() => {
                  handleClose();
                  navigate("/products");
               }}
            />
         </Box>
      </Modal>
   );
};

export default ProductUpsertModal;
