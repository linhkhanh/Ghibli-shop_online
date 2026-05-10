import api from "../api/axios";

const updateAccount = async (data: {
   name: string;
   email: string;
   phone: string;
   address: string;
}) => {
   try {
      const res = await api.put("/user/update", data);
      return {
         message: res.data.message,
         user: res.data.user,
      };
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? "Cannot update account or this email has been taken." : String(error)}`,
      );
   }
};

export default updateAccount;
