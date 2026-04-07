import BackDrop from "../../components/BackDrop/BackDrop";
import ProductsListByMovie from "../../components/ProductsByMovie/ProductsByMovie";
import { mockProductsByMovie } from "../../utils/mockData";

const LandingPage = () => {
   return (
      <div className="animate-fadeIn">
         <BackDrop />
         {mockProductsByMovie.map((item) => (
            <ProductsListByMovie
               key={item.movie.id}
               productsListByMovie={item}
            />
         ))}
      </div>
   );
};

export default LandingPage;
