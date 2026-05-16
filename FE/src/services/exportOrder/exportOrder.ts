import api from "../api/axios";

export const exportOrder = async (orderId: number) => {
   try {
      const response = await api.get(`/orders/invoice/${orderId}`, {
         responseType: "blob", // Important for handling binary data
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `order_${orderId}_invoice.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
   } catch (error) {
      console.error("Error exporting order invoice:", error);
      throw new Error(
         "Failed to export order invoice. Please try again later.",
      );
   }
};
