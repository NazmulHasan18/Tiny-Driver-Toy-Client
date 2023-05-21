import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const FeaturedToys = () => {
   const [cars, setCars] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch("https://toy-market-place-server.vercel.app/featureToys")
         .then((res) => res.json())
         .then((data) => {
            setCars(data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return (
         <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#00ffff", "#ffebcd", "#2d2dff", "#87ceeb", "#ff3737"]}
         />
      );
   }
   return (
      <div className="my-24" data-aos="fade-up">
         <div className="text-center text-white mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">Feature Toys</h2>
            <p className="text-xl font-semibold">The toys are customer Linking most You can buy them</p>
         </div>
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
               },
            }}
            coverflowEffect={{
               rotate: 40,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            className="mySwiper"
         >
            {cars.map((car) => (
               <SwiperSlide key={car._id}>
                  <div className="card w-full md:w-96 bg-blue-400 shadow-xl">
                     <figure className="px-5 pt-5">
                        <img src={car.picture_url} alt="Shoes" className="rounded-xl w-full md:w-80 h-60" />
                     </figure>
                     <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">{car.name}</h2>
                        <p className="text-xl font-semibold text-red-500">Price: ${car.price}</p>
                        <div className="flex justify-center items-center gap-2">
                           <ReactStars
                              size={25}
                              value={parseFloat(car.rating)}
                              edit={false}
                              isHalf={true}
                           ></ReactStars>
                           <p className="text-yellow-500 text-xl font-bold">{car.rating}</p>
                        </div>
                        <div className="card-actions">
                           <Link to={`/cars/${car._id}`}>
                              <button className="btn btn-primary btn-sm" htmlFor={car._id}>
                                 View Details
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default FeaturedToys;
