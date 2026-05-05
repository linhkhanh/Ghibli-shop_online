import { useEffect, useState } from "react";
import api from "../../services/api/axios";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface RevenueData {
   pendingRevenue: number;
   completedRevenue: number;
}
const useDashboard = () => {
   // Mock data
   const topSellers = [
      { title: "Totoro Plush", sold: 120 },
      { title: "No-Face Piggy Bank", sold: 95 },
      { title: "Catbus Backpack", sold: 80 },
      { title: "Kiki's Delivery Service Tote", sold: 65 },
      { title: "Howl's Moving Castle Figurine", sold: 50 },
   ];

   const { showSnackbar } = useSnackbar();
   const [orderRevenue, setOrderRevenue] = useState<RevenueData>({
      pendingRevenue: 0,
      completedRevenue: 0,
   });

   const [usersReport, setUsersReport] = useState({
      totalCustomers: 0,
      activeCustomers: 0,
      retentionRate: 0,
   });

   const [lowStockData, setLowStockData] = useState({
      lowStockCount: 0,
      thresholdUsed: 10,
   });

   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const fetchDashboardData = async () => {
         setLoading(true);
         try {
            const revenueData = await api.get("/order-revenue");
            setOrderRevenue({
               pendingRevenue: revenueData.data.data.total_pending_revenue,
               completedRevenue: revenueData.data.data.total_confirmed_revenue,
            });

            const usersData = await api.get("/customer-count");
            setUsersReport({
               totalCustomers: usersData.data.data.total_customers,
               activeCustomers: usersData.data.data.active_customers,
               retentionRate: usersData.data.data.retention_rate,
            });

            const lowStockRes = await api.get("/low-stock-count");
            setLowStockData({
               lowStockCount: lowStockRes.data.data.low_stock_count,
               thresholdUsed: lowStockRes.data.data.threshold_used,
            });
         } catch (error) {
            console.error("Error fetching dashboard data:", error);
            showSnackbar("Error fetching dashboard data", "error");
         } finally {
            setLoading(false);
         }
      };
      fetchDashboardData();
   }, []);
   return {
      lowStockData,
      topSellers,
      orderRevenue,
      usersReport,
      loading,
   };
};

export default useDashboard;
