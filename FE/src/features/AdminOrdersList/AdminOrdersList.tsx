import React, { useState } from "react";
import {
   Box,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
   Typography,
   Button,
   Select,
   MenuItem,
   FormControl,
} from "@mui/material";
import { Style } from "@mui/icons-material";
import StyledLink from "../../components/StyledLink/StyledLink";
import useAdminOrdersList from "../../hooks/useAdminOrdersList/useAdminOrdersList";
// import useOrdersList from "../../hooks/useOrdersList/useOrdersList";

const ORDER_STATUSES = [
   "pending",
   "processing",
   "shipped",
   "delivered",
   "cancelled",
];

const AdminOrdersList = () => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [editStatusId, setEditStatusId] = useState<string | null>(null);
   const [statusDraft, setStatusDraft] = useState<string>("");
   const [filterStatus, setFilterStatus] = useState<string>("all");

   const { orders, loading } = useAdminOrdersList();

   const filteredOrders =
      filterStatus === "all"
         ? orders
         : orders.filter((order) => order.status === filterStatus);

   const paginatedOrders = filteredOrders.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
   );

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
   ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   const handleEditClick = (orderId: string, currentStatus: string) => {
      setEditStatusId(orderId);
      setStatusDraft(currentStatus);
   };

   const handleStatusChange = (
      event: React.ChangeEvent<{ value: unknown }>,
   ) => {
      setStatusDraft(event.target.value as string);
   };

   const handleSaveStatus = (orderId: string) => {
      // TODO: Call API to update order status
      setEditStatusId(null);
   };

   const handleFilterChange = (
      event: React.ChangeEvent<{ value: unknown }>,
   ) => {
      setFilterStatus(event.target.value as string);
      setPage(0);
   };

   return (
      <Box sx={{ p: 4, maxWidth: 1100, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Admin Order List
         </Typography>
         <Box mb={2} display="flex" alignItems="center" gap={2}>
            <FormControl size="small" sx={{ minWidth: 180 }}>
               <Select
                  value={filterStatus}
                  onChange={handleFilterChange}
                  displayEmpty
               >
                  <MenuItem value="all">All Statuses</MenuItem>
                  {ORDER_STATUSES.map((status) => (
                     <MenuItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </Box>
         {loading ? (
            <Typography variant="body1">Loading orders...</Typography>
         ) : filteredOrders.length === 0 ? (
            <Typography variant="body1">No orders found.</Typography>
         ) : (
            <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
               <Table>
                  <TableHead>
                     <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell sx={{ fontWeight: 700 }} align="center">
                           Order
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                           Order Date
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>Order ID</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                           Order Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                           Payment Method
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>
                           Amount
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                           Action
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {paginatedOrders.map((order, idx) => (
                        <TableRow key={order.id}>
                           <TableCell align="center">
                              {page * rowsPerPage + idx + 1}
                           </TableCell>
                           <TableCell>{order.createdAt}</TableCell>
                           <TableCell>
                              <StyledLink
                                 path={"/member-order-detail/" + order.id}
                              >
                                 #{order.id}
                              </StyledLink>
                           </TableCell>
                           <TableCell>
                              {editStatusId === order.id ? (
                                 <FormControl size="small">
                                    <Select
                                       value={statusDraft}
                                       onChange={handleStatusChange}
                                    >
                                       {ORDER_STATUSES.map((status) => (
                                          <MenuItem key={status} value={status}>
                                             {status.charAt(0).toUpperCase() +
                                                status.slice(1)}
                                          </MenuItem>
                                       ))}
                                    </Select>
                                 </FormControl>
                              ) : (
                                 order.status.charAt(0).toUpperCase() +
                                 order.status.slice(1)
                              )}
                           </TableCell>
                           <TableCell>{order.paymentMethod}</TableCell>
                           <TableCell align="right">
                              ${order.totalAmount}
                           </TableCell>
                           <TableCell align="center">
                              {editStatusId === order.id ? (
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => handleSaveStatus(order.id)}
                                 >
                                    Save
                                 </Button>
                              ) : (
                                 <Button
                                    variant="outlined"
                                    color="info"
                                    size="small"
                                    onClick={() =>
                                       handleEditClick(order.id, order.status)
                                    }
                                 >
                                    Edit
                                 </Button>
                              )}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
               <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={filteredOrders.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            </TableContainer>
         )}
      </Box>
   );
};

export default AdminOrdersList;
