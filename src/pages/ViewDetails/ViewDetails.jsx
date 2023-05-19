import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ViewDetails = () => {
   const car = useLoaderData();
   const {
      picture_url,
      name,
      price,
      rating,
      seller_name,
      seller_email,
      sub_category,
      available_quantity,
      description,
   } = car;
   console.log(car);
   return (
      <div className="hero min-h-screen bg-base-200 my-20">
         <div className="hero-content flex-col lg:flex-row">
            <img src={picture_url} className="rounded-lg shadow-2xl md:w-1/2 gap-10" data-aos="flip-left" />
            <div className="md:w-2/5 space-y-4">
               <h1
                  className="text-5xl font-bold"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos="fade-right"
               >
                  {name}
               </h1>
               <div data-aos="fade-left" data-aos-delay="60" data-aos-duration="1000">
                  <p className="text-2xl font-semibold">
                     Seller: <span>{seller_name}</span>
                  </p>
                  <p className="text-xl font-semibold">
                     Seller Email: <span>{seller_email}</span>
                  </p>
               </div>
               <div
                  className="text-xl font-bold flex gap-8"
                  data-aos-delay="70"
                  data-aos-duration="1000"
                  data-aos="fade-right"
               >
                  <p className="text-red-500">
                     Price: <span>${price}</span>
                  </p>
                  <div className="flex gap-2">
                     <ReactStars size={25} value={rating} edit={false} isHalf={true}></ReactStars>
                     <p className="text-yellow-500 text-xl font-bold">{rating}</p>
                  </div>
               </div>
               <div
                  className="text-xl font-semibold"
                  data-aos-delay="80"
                  data-aos-duration="1000"
                  data-aos="fade-right"
               >
                  <p>
                     Available: <span>{available_quantity} piece</span>
                  </p>
                  <p>
                     Category: <span>{sub_category}</span>
                  </p>
               </div>
               <p className="py-6 text-lg" data-aos-delay="90" data-aos-duration="1000" data-aos="fade-down">
                  {description}
               </p>
               <button
                  className="btn btn-info text-white"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
               >
                  Buy Now
               </button>
            </div>
         </div>
      </div>
   );
};

export default ViewDetails;
