import { Modal, Box } from "@mui/material";
import CreateProductForm from "../../components/CreateProductForm/CreateProductForm";
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

interface CreateProductModalProps {
   open: boolean;
   handleClose: () => void;
   title: string;
   defaultValues?: ProductData;
}
const CreateProductModal = (props: CreateProductModalProps) => {
   const { open, handleClose, title, defaultValues } = props;
   return (
      <Modal open={open} onClose={handleClose}>
         <Box sx={modalStyle}>
            <CreateProductForm title={title} defaultValues={defaultValues} />
         </Box>
      </Modal>
   );
};

export default CreateProductModal;
