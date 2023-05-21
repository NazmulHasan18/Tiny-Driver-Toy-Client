import ReactStars from "react-rating-stars-component";

const ReviewSlider = ({ review }) => {
   const { image, customerName, rating, comment, date } = review;
   return (
      <div className=" md:min-h-screen relative">
         <img src="/review.png" alt="" className="hidden md:block" />
         <div className="md:absolute top-0 flex flex-col gap-4 items-center justify-center md:bg-black h-full w-full bg-blue-700 py-9 md:bg-opacity-50">
            <div className="avatar">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={image} />
               </div>
            </div>
            <h4 className="text-white text-3xl font-bold">{customerName}</h4>
            <p className="text-white font-semibold w-4/5 text-center">{comment}</p>
            <div className="flex gap-2 items-center">
               <ReactStars size={25} value={rating} edit={false} isHalf={true}></ReactStars>
               <p className="text-yellow-500 text-xl font-bold">{rating}</p>
            </div>
            <p className="text-white">Review Date: {date}</p>
         </div>
      </div>
   );
};

export default ReviewSlider;
