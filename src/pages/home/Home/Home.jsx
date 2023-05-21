import AddReview from "../AddReview/AddReview";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <CustomerReview></CustomerReview>
         <AddReview></AddReview>
      </div>
   );
};

export default Home;
