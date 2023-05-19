import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
   const {
      picture_url,
      name,
      price,
      rating,
      seller_name,
      seller_email,
      sub_category,
      available_quantity,
      _id,
   } = toy;
   return (
      <tr>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                     <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div>
                  <div className="font-bold">
                     <p className="text-lg">{name}</p>
                     <p className="text-sm text-blue-500 font-semibold">{sub_category}</p>
                     <p className="text-sm text-yellow-500 font-semibold">Rating: {rating}</p>
                  </div>
               </div>
            </div>
         </td>
         <td>
            <p className="font-bold">{seller_name}</p>
            <p className="badge badge-ghost badge-sm">{seller_email}</p>
         </td>
         <td>
            <div className="font-bold">
               <p className=" text-red-500 font-semibold">Price: ${price}</p>
               <p className="text-sm text-yellow-500 font-semibold">Available: {available_quantity} Pieces</p>
            </div>
         </td>
         <th>
            <Link to={`/cars/${_id}`}>
               <button className="btn btn-info btn-sm text-white">details</button>
            </Link>
         </th>
      </tr>
   );
};

export default ToyRow;
