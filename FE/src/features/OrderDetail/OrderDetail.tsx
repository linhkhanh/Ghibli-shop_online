import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useOrderDetail from "../../hooks/useOrderDetail/useOrderDetail";
import type { OrderItem } from "../../utils/dataType";
import { Box, Typography } from "@mui/material";

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
   const orderDetail: OrderItem[] = useOrderDetail();

   return (
      <Box px={20} alignContent="center">
         <Typography variant="h5">Order Detail</Typography>
         <TableContainer component={Paper}>
            <Table aria-label="customized table">
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Product ID</StyledTableCell>
                     <StyledTableCell align="right">
                        Product Title
                     </StyledTableCell>
                     <StyledTableCell align="right">Price</StyledTableCell>
                     <StyledTableCell align="right">Quantity</StyledTableCell>
                     <StyledTableCell align="right">
                        Order Status
                     </StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {orderDetail.map((item) => (
                     <StyledTableRow key={item.id}>
                        <StyledTableCell component="th" scope="row">
                           <img
                              src={item.imageUrl}
                              alt={item.title}
                              style={{
                                 width: 50,
                                 height: 50,
                                 marginRight: 16,
                                 objectFit: "cover",
                              }}
                           />
                           {item.productId}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {item.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {item.price}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {item.quantity}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {item.status}
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
}
