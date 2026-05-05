import { useEffect, useState } from "react";
import api from "../../services/api/axios";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface RevenueData {
   pendingRevenue: number;
   completedRevenue: number;
}

interface TopSeller {
   id: number;
   title: string;
   sold: number;
   totalRevenue: number;
}

interface OrderStatusDistribution {
   status: "pending" | "processing" | "shipped" | "delivered";
   count: number;
}

const useDashboard = () => {
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

   const [topSellers, setTopSellers] = useState<TopSeller[]>([]);
   const [orderStatusDistribution, setOrderStatusDistribution] = useState<
      OrderStatusDistribution[]
   >([]);

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

            const topSellersRes = await api.get("/top-sellers");
            const formattedTopSellers = topSellersRes.data.data.map(
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               (item: any) => ({
                  id: item.id,
                  title: item.title,
                  sold: item.total_sold,
                  totalRevenue: item.total_revenue,
               }),
            );
            setTopSellers(formattedTopSellers);

            const orderStatusRes = await api.get("/order-status-distribution");
            const formattedStatusDistribution = orderStatusRes.data.data.map(
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               (item: any) => ({
                  status: item.status,
                  count: item.total,
               }),
            );
            setOrderStatusDistribution(formattedStatusDistribution);
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
      orderStatusDistribution,
      loading,
   };
};

export default useDashboard;
