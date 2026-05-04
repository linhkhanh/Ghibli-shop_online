import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AccountUpsertForm from "../AccountUpsertForm/AccountUpsertForm";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

interface AccountUpsertModalProps {
   open: boolean;
   handleClose: () => void;
}

export default function AccountUpsertModal({
   open,
   handleClose,
}: AccountUpsertModalProps) {
   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <AccountUpsertForm />
         </Box>
      </Modal>
   );
}
