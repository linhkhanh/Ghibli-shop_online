import { Box, Typography, Paper, Grid, Avatar, Tooltip } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import useDashboard from "../../hooks/useDashboard/useDashboard";
import StyledLink from "../../components/StyledLink/StyledLink";

const Dashboard = () => {
   const { user } = useAuthentication();
   const {
      lowStockData,
      topSellers,
      orderRevenue,
      usersReport,
      orderStatusDistribution,
      loading,
   } = useDashboard();

   if (loading) {
      return (
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "100vh",
            }}
         >
            <Typography variant="h6">Loading...</Typography>
         </Box>
      );
   }

   return (
      <Box sx={{ display: "flex" }}>
         <Box component="main" sx={{ flexGrow: 1, px: 8, py: 3 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
               Admin Dashboard
            </Typography>
            <Grid container spacing={3} mb={4}>
               <Grid size={3}>
                  <Paper
                     sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        background:
                           "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                        boxShadow: 3,
                     }}
                  >
                     <Avatar
                        sx={{
                           width: 56,
                           height: 56,
                           bgcolor: "primary.main",
                           color: "white",
                           fontSize: 28,
                        }}
                     >
                        {user?.name ? user.name[0] : "?"}
                     </Avatar>
                     <Box>
                        <Typography variant="subtitle2" color="primary.main">
                           Account
                        </Typography>
                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="primary.dark"
                        >
                           {user?.name || "-"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {user?.email || "-"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Role: {user?.role || "-"}
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
               <Grid size={3}>
                  <Paper
                     sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        background:
                           "linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)",
                        boxShadow: 3,
                     }}
                  >
                     <Avatar
                        sx={{
                           width: 56,
                           height: 56,
                           bgcolor: "secondary.main",
                           color: "white",
                           fontSize: 28,
                        }}
                     >
                        <span role="img" aria-label="users">
                           👥
                        </span>
                     </Avatar>
                     <Box>
                        <Typography variant="subtitle2" color="secondary.main">
                           Users
                        </Typography>
                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="secondary.dark"
                        >
                           Total: {usersReport.totalCustomers}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Active: {usersReport.activeCustomers}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Retention Rate: {usersReport.retentionRate}%
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
               <Grid size={3}>
                  <Paper
                     sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        background:
                           "linear-gradient(135deg, #fffde7 0%, #ffe082 100%)",
                        boxShadow: 3,
                     }}
                  >
                     <Avatar
                        sx={{
                           width: 56,
                           height: 56,
                           bgcolor: "warning.main",
                           color: "white",
                           fontSize: 28,
                        }}
                     >
                        <span role="img" aria-label="alert">
                           ⚠️
                        </span>
                     </Avatar>
                     <Box>
                        <StyledLink path="/low-stock-products">
                           <Tooltip
                              title="View low stock products"
                              placement="top"
                           >
                              <Typography
                                 variant="subtitle2"
                                 color="warning.main"
                              >
                                 Low Stock
                              </Typography>
                           </Tooltip>
                        </StyledLink>

                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="warning.dark"
                        >
                           {lowStockData.lowStockCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Threshold: {lowStockData.thresholdUsed}
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
               <Grid size={3}>
                  <Paper
                     sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        background:
                           "linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)",
                        boxShadow: 3,
                     }}
                  >
                     <Avatar
                        sx={{
                           width: 56,
                           height: 56,
                           bgcolor: "success.main",
                           color: "white",
                           fontSize: 28,
                        }}
                     >
                        <span role="img" aria-label="revenue">
                           💰
                        </span>
                     </Avatar>
                     <Box>
                        <StyledLink path="/admin/orders">
                           <Tooltip title="View all orders" placement="top">
                              <Typography
                                 variant="subtitle2"
                                 color="success.main"
                              >
                                 Revenue
                              </Typography>
                           </Tooltip>
                        </StyledLink>

                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="success.dark"
                        >
                           Total : $
                           {(
                              orderRevenue.completedRevenue +
                              orderRevenue.pendingRevenue
                           ).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Completed: $
                           {orderRevenue.completedRevenue.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Pending: ${orderRevenue.pendingRevenue.toFixed(2)}
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
            </Grid>

            <Grid container spacing={3}>
               <Grid size={6}>
                  <Paper sx={{ p: 3 }}>
                     <Typography variant="subtitle1" fontWeight={600} mb={2}>
                        Top 5 Best Selling Products
                     </Typography>
                     <BarChart
                        xAxis={[
                           {
                              scaleType: "band",
                              data: topSellers.map((item) => item.title),
                              label: "Product",
                           },
                        ]}
                        series={[
                           {
                              data: topSellers.map((item) => item.sold),
                              label: "Sold",
                           },
                        ]}
                        height={250}
                     />
                  </Paper>
               </Grid>
               <Grid size={6}>
                  <Paper sx={{ p: 3 }}>
                     <Typography variant="subtitle1" fontWeight={600} mb={2}>
                        Order Status Distribution
                     </Typography>
                     <PieChart
                        series={[
                           {
                              data: orderStatusDistribution.map((item) => ({
                                 id: item.status,
                                 value: item.count,
                                 label: item.status,
                              })),
                           },
                        ]}
                        height={250}
                     />
                  </Paper>
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};

export default Dashboard;
