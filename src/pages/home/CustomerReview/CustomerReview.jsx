import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import ReviewSlider from "./ReviewSlider";

const CustomerReview = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch("http://localhost:4000/reviews")
         .then((res) => res.json())
         .then((data) => setReviews(data));
   }, []);

   return (
      <div className="mb-14">
         <div className="text-center text-white mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">Customer Review</h2>
            <p className="text-xl font-semibold">Some Of Our Client Word! Watch what they says about us.</p>
         </div>
         <div>
            <Swiper
               pagination={{
                  type: "progressbar",
               }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className="mySwiper"
               loop={true}
            >
               {reviews.map((review) => (
                  <SwiperSlide key={review._id}>
                     <ReviewSlider review={review}></ReviewSlider>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default CustomerReview;
