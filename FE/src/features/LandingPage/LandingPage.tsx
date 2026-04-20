import BackDrop from "../../components/BackDrop/BackDrop";
import ProductsListByMovie from "../../components/ProductsListByMovie/ProductsListByMovie";

const LandingPage = () => {
   return (
      <div className="animate-fadeIn">
         <BackDrop />
         <ProductsListByMovie movieId={4} key={4} />
         <ProductsListByMovie movieId={2} key={2} />
         <ProductsListByMovie movieId={3} key={3} />
      </div>
   );
};

export default LandingPage;
