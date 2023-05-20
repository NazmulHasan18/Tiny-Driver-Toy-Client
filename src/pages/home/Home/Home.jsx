import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Tiny Driver Toy | Home</title>
         </Helmet>
         <Banner></Banner>
         <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
      </div>
   );
};

export default Home;
