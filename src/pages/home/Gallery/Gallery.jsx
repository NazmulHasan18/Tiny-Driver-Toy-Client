import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { ColorRing } from "react-loader-spinner";

const Gallery = () => {
   const [cars, setCars] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch("https://toy-market-place-server.vercel.app/car_gallery")
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
            <h2 className="text-5xl font-bold ">Car Toy Gallery</h2>
            <p className="text-xl font-semibold">Unleash the Joy of Miniature Racing</p>
         </div>
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
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
                  <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl">
                     <figure>
                        <img src={car.image} alt="" className=" h-60 rounded-lg" />
                     </figure>
                     <div className="card-body text-center">
                        <h2 className="card-title mx-auto font-bold">{car.name}</h2>
                        <div className="flex justify-center items-center">
                           <p className="font-bold">
                              Price: <span className="text-green-500">${car.price}</span>
                           </p>
                           <p className="font-bold">
                              Ratings: <span className="text-yellow-500">{car.rating}</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Gallery;
