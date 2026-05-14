import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Button,
   Typography,
} from "@mui/material";

interface ConfirmDeleteProductModalProps {
   open: boolean;
   onCancel: () => void;
   onConfirm: () => void;
}

const ConfirmDeleteProductModal = ({
   open,
   onCancel,
   onConfirm,
}: ConfirmDeleteProductModalProps) => {
   return (
      <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
         <DialogTitle>
            <Typography variant="h6" fontWeight={700} color="error">
               Are you sure to delete this product?
            </Typography>
         </DialogTitle>
         <DialogContent>
            <Typography variant="body2" color="text.secondary">
               This action cannot be reversed. Please confirm if you want to
               proceed with deleting this product.
            </Typography>
         </DialogContent>
         <DialogActions>
            <Button onClick={onCancel} variant="outlined" color="primary">
               Cancel
            </Button>
            <Button onClick={onConfirm} variant="contained" color="error">
               Confirm
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default ConfirmDeleteProductModal;
