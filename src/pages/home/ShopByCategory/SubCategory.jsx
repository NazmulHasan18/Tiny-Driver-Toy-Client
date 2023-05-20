import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = ({ subCategory }) => {
   const [loading, setLoading] = useState(true);
   const [cars, setCars] = useState([]);
   const [click, setClick] = useState(false);

   useEffect(() => {
      fetch(`https://toy-market-place-server.vercel.app/cars/${subCategory}`)
         .then((res) => res.json())
         .then((data) => {
            setCars(data);
            setLoading(false);
         });
   }, [subCategory]);

   const handelShowMore = () => {
      setClick(!click);
   };

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
      <div className="text-center space-y-8">
         <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 my-8">
            {click
               ? cars.map((car) => <SubCategoryCard key={car._id} car={car}></SubCategoryCard>)
               : cars.slice(0, 3).map((car) => <SubCategoryCard key={car._id} car={car}></SubCategoryCard>)}
         </div>
         {cars.length > 3 && (
            <button className="btn btn-outline btn-info" onClick={handelShowMore}>
               {click ? "Show Less" : "Show More"}
            </button>
         )}
      </div>
   );
};

export default SubCategory;
