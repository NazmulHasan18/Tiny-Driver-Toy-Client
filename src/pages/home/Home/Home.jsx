import AddReview from "../AddReview/AddReview";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import FeaturedToys from "../FeaturedToys/FeaturedToys";

import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <div className="container mx-auto">
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FeaturedToys></FeaturedToys>
            <CustomerReview></CustomerReview>
            <AddReview></AddReview>
         </div>
      </div>
   );
};

export default Home;
