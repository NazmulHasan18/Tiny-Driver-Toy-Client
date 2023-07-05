import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SubCategoryCard = ({ car }) => {
   const { picture_url, name, price, rating, _id } = car;
   return (
      <div className="card w-full md:w-96 bg-sky-200 shadow-xl">
         <figure className="px-5 pt-5">
            <img src={picture_url} alt="Shoes" className="rounded-xl w-full md:w-80 h-60" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className="text-xl font-semibold text-red-500">Price: ${price}</p>
            <div className="flex justify-center items-center gap-2">
               <ReactStars size={25} value={parseFloat(rating)} edit={false} isHalf={true}></ReactStars>
               <p className="text-yellow-500 text-xl font-bold">{rating}</p>
            </div>
            <div className="card-actions">
               <Link to={`/cars/${_id}`}>
                  <button className="btn btn-primary btn-sm" htmlFor={_id}>
                     View Details
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SubCategoryCard;
