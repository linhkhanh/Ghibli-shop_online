import {
   Box,
   Chip,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
   Typography,
} from "@mui/material";
import { useState } from "react";
import useOrdersList from "../../hooks/useOrdersList/useOrdersList";
import type { Order } from "../../utils/dataType";
import StyledLink from "../../components/StyledLink/StyledLink";

const OrdersList = () => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const listOfOrder: Order[] = useOrdersList();

   const orders = listOfOrder.map((order) => ({
      ...order,
      paymentMethod: "Cash",
      orderDate: new Date(order.createdAt).toLocaleDateString(),
   }));

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
   ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   const paginatedOrders = orders.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
   );

   return (
      <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Order List
         </Typography>

         <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
            <Table>
               <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                     <TableCell sx={{ fontWeight: 700 }}>Order Date</TableCell>
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
                  </TableRow>
               </TableHead>
               <TableBody>
                  {paginatedOrders.map((order) => (
                     <TableRow key={order.id}>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>
                           <StyledLink
                              path={"/member-order-detail/" + order.id}
                           >
                              {order.id}
                           </StyledLink>
                        </TableCell>
                        <TableCell>
                           <Chip
                              label={order.status}
                              color={
                                 order.status === "pending"
                                    ? "warning"
                                    : order.status === "processing"
                                      ? "info"
                                      : order.status === "shipped"
                                        ? "primary"
                                        : order.status === "delivered"
                                          ? "success"
                                          : "error"
                              }
                              size="small"
                           />
                        </TableCell>
                        <TableCell>{order.paymentMethod}</TableCell>
                        <TableCell align="right">
                           ${order.totalAmount.toFixed(2)}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
            <TablePagination
               rowsPerPageOptions={[5, 10, 25]}
               component="div"
               count={orders.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </TableContainer>
      </Box>
   );
};

export default OrdersList;
