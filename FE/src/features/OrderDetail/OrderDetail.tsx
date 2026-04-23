import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useOrderDetail from "../../hooks/useOrderDetail/useOrderDetail";
import { Box, Typography } from "@mui/material";
import StyledLink from "../../components/StyledLink/StyledLink";
import { useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   "&:last-child td, &:last-child th": {
      border: 0,
   },
}));

export default function OrderDetail() {
   const orderId = useParams();
   const { orderItems, loading } = useOrderDetail(
      orderId ? parseInt(orderId.orderId || "0") : 0,
   );

   // Calculate total price if possible
   const total =
      orderItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) ||
      0;

   return (
      <Box
         minHeight="80vh"
         display="flex"
         justifyContent="center"
         alignItems="flex-start"
         bgcolor="#f5f7fa"
         py={6}
      >
         <Paper
            elevation={4}
            sx={{
               p: 5,
               borderRadius: 4,
               minWidth: 700,
               width: "100%",
               maxWidth: 900,
            }}
         >
            <Typography
               variant="h5"
               fontWeight="bold"
               gutterBottom
               color="primary.main"
               align="center"
            >
               Order Details
            </Typography>
            <Typography
               variant="subtitle1"
               color="text.secondary"
               align="center"
               mb={3}
            >
               Order ID: <b>{orderId.orderId}</b>
            </Typography>
            {loading ? (
               <Typography variant="body1" align="center">
                  Loading order details...
               </Typography>
            ) : orderItems.length === 0 ? (
               <Typography variant="body1" align="center">
                  No items found for this order.
               </Typography>
            ) : (
               <TableContainer
                  component={Paper}
                  sx={{ borderRadius: 3, boxShadow: 2 }}
               >
                  <Table aria-label="customized table">
                     <TableHead>
                        <TableRow>
                           <StyledTableCell align="center">
                              Product
                           </StyledTableCell>
                           <StyledTableCell align="left">Title</StyledTableCell>
                           <StyledTableCell align="right">
                              Price
                           </StyledTableCell>
                           <StyledTableCell align="right">
                              Quantity
                           </StyledTableCell>
                           <StyledTableCell align="right">
                              Status
                           </StyledTableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {orderItems.map((item) => (
                           <StyledTableRow key={item.id}>
                              <StyledTableCell
                                 align="center"
                                 component="th"
                                 scope="row"
                              >
                                 <StyledLink
                                    path={`/product-detail/${item.productId}`}
                                 >
                                    <Box
                                       display="flex"
                                       alignItems="center"
                                       justifyContent="center"
                                    >
                                       <img
                                          src={item.imageUrl}
                                          alt={item.title}
                                          style={{
                                             width: 60,
                                             height: 60,
                                             borderRadius: 12,
                                             objectFit: "cover",
                                             boxShadow:
                                                "0 2px 8px rgba(0,0,0,0.08)",
                                             marginRight: 8,
                                             border: "2px solid #e0e0e0",
                                          }}
                                       />
                                    </Box>
                                 </StyledLink>
                                 <Typography
                                    variant="caption"
                                    color="text.secondary"
                                 >
                                    #{item.productId}
                                 </Typography>
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                 <StyledLink
                                    path={`/product-detail/${item.productId}`}
                                 >
                                    <Typography
                                       fontWeight={500}
                                       sx={{
                                          maxWidth: 180,
                                          whiteSpace: "nowrap",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "block",
                                       }}
                                       title={item.title}
                                    >
                                       {item.title}
                                    </Typography>
                                 </StyledLink>
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                 ${item.price}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                 {item.quantity}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                 <Box
                                    px={1}
                                    py={0.5}
                                    borderRadius={2}
                                    bgcolor={
                                       item.status === "delivered"
                                          ? "success.light"
                                          : "warning.light"
                                    }
                                    color={
                                       item.status === "delivered"
                                          ? "success.dark"
                                          : "warning.dark"
                                    }
                                    display="inline-block"
                                 >
                                    {item.status.charAt(0).toUpperCase() +
                                       item.status.slice(1)}
                                 </Box>
                              </StyledTableCell>
                           </StyledTableRow>
                        ))}
                        <StyledTableRow>
                           <StyledTableCell colSpan={2} />
                           <StyledTableCell
                              align="right"
                              colSpan={2}
                              sx={{ fontWeight: "bold", fontSize: 16 }}
                           >
                              Total:
                           </StyledTableCell>
                           <StyledTableCell
                              align="right"
                              sx={{ fontWeight: "bold", fontSize: 16 }}
                           >
                              ${total.toFixed(2)}
                           </StyledTableCell>
                        </StyledTableRow>
                     </TableBody>
                  </Table>
               </TableContainer>
            )}
         </Paper>
      </Box>
   );
}
