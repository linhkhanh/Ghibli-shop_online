import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

// Mock data
const totalRevenue = 125000;
const lowStockCount = 4;
const topSellers = [
   { title: "Totoro Plush", sold: 120 },
   { title: "No-Face Piggy Bank", sold: 95 },
   { title: "Kiki Mug", sold: 80 },
   { title: "Catbus Pillow", sold: 65 },
   { title: "Howl Ring", sold: 50 },
];
const orderStatusDist = [
   { status: "pending", count: 12 },
   { status: "processing", count: 8 },
   { status: "shipped", count: 15 },
   { status: "delivered", count: 60 },
];

const Dashboard = () => {
   const { user } = useAuthentication();
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
                           Total Users
                        </Typography>
                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="secondary.dark"
                        >
                           39
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
                        <Typography variant="subtitle2" color="warning.main">
                           Low Stock
                        </Typography>
                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="warning.dark"
                        >
                           {lowStockCount}
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
                        <Typography variant="subtitle2" color="success.main">
                           Revenue
                        </Typography>
                        <Typography
                           variant="h6"
                           fontWeight={700}
                           color="success.dark"
                        >
                           ${totalRevenue.toLocaleString()}
                        </Typography>
                     </Box>
                  </Paper>
               </Grid>
            </Grid>

            <Grid container spacing={3}>
               <Grid size={6}>
                  <Paper sx={{ p: 3 }}>
                     <Typography variant="subtitle1" fontWeight={600} mb={2}>
                        Top 5 Best Sellers
                     </Typography>
                     <BarChart
                        xAxis={[
                           {
                              scaleType: "band",
                              data: topSellers.map((item) => item.title),
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
                              data: orderStatusDist.map((item) => ({
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
