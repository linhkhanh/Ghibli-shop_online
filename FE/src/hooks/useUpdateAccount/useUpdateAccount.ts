import { useState } from "react";
import updateAccount from "../../services/updateAccount/updateAccount";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UpdateAccountPayload {
   name: string;
   email: string;
   phone: string;
   address: string;
}

const useUpdateAccount = () => {
   const { showSnackbar } = useSnackbar();
   const [loading, setLoading] = useState(false);

   const updateAccountInfo = async (payload: UpdateAccountPayload) => {
      setLoading(true);
      try {
         const res = await updateAccount(payload);
         showSnackbar(res.message, "success");
         window.location.reload();
         return res;
      } catch (error) {
         showSnackbar(
            `${error instanceof Error ? error.message : String(error)}`,
            "error",
         );
      } finally {
         setLoading(false);
      }
   };

   return { updateAccountInfo, loading };
};

export default useUpdateAccount;
