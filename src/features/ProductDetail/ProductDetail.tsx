import { Divider } from "@mui/material";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import useProductDetail from "../../hooks/useProductDetail/useProductDetail";
import { useParams } from "react-router-dom";

// TODO: Refactor and fix UI
const ProductDetail = () => {
   const { productId } = useParams();
   const productInfo = useProductDetail(productId || "");

   return (
      <main style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
         <div
            style={{
               display: "grid",
               gridTemplateColumns: "minmax(0, 1fr)",
               gap: "2rem",
            }}
         >
            <div
               style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
               }}
            >
               <img
                  src={productInfo.image}
                  alt={productInfo.title}
                  style={{
                     width: "100%",
                     display: "block",
                     objectFit: "cover",
                     height: "420px",
                  }}
               />
            </div>

            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
               }}
            >
               <div>
                  <h1 style={{ margin: "0 0 1rem", fontSize: "2.5rem" }}>
                     {productInfo.title}
                  </h1>
                  <p
                     style={{
                        margin: "0 0 1.5rem",
                        color: "#555",
                        lineHeight: 1.8,
                        fontSize: "1rem",
                     }}
                  >
                     {productInfo.description}
                  </p>
                  <p
                     style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}
                  >
                     {productInfo.price}
                  </p>
               </div>

               <button
                  type="button"
                  style={{
                     marginTop: "2rem",
                     padding: "1rem 1.5rem",
                     borderRadius: "9999px",
                     border: "none",
                     backgroundColor: "#2563EB",
                     color: "white",
                     fontSize: "1rem",
                     fontWeight: 600,
                     cursor: "pointer",
                     transition: "background-color 0.2s ease",
                  }}
                  onMouseOver={(event) => {
                     (
                        event.currentTarget as HTMLButtonElement
                     ).style.backgroundColor = "#1D4ED8";
                  }}
                  onMouseOut={(event) => {
                     (
                        event.currentTarget as HTMLButtonElement
                     ).style.backgroundColor = "#2563EB";
                  }}
               >
                  Add To Cart
               </button>
            </div>
         </div>

         <Divider sx={{ margin: "3rem 0" }} />

         <h2 style={{ margin: "0 0 1.5rem" }}>Related Products</h2>
         <RelatedProducts />
      </main>
   );
};

export default ProductDetail;
