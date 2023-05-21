import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";
import ToyRow from "./ToyRow";
import { Helmet } from "react-helmet";

const AllToys = () => {
   const [loading, setLoading] = useState(true);
   const [toys, setToys] = useState([]);
   const [totalPages, setTotalPages] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [disableNext, setDisableNext] = useState(false);
   const [disablePrevious, setDisablePrevious] = useState(false);
   const [searchText, setSearchText] = useState("");

   useEffect(() => {
      fetch(`https://toy-market-place-server.vercel.app/all_toys?page=${currentPage}&&search=${searchText}`)
         .then((res) => res.json())
         .then((data) => {
            setTotalPages(data.totalPages);
            setToys(data.toys);
            setLoading(false);
            console.log(data.toys, data.totalPages);
         });
   }, [currentPage, searchText]);

   const handelSearch = (event) => {
      event.preventDefault();
      const text = event.target.text.value;
      setSearchText(text);
      setLoading(true);
   };

   const handelPrevious = () => {
      setCurrentPage(currentPage - 1);
      setSearchText(searchText);
      setDisableNext(false);
      setLoading(true);
   };

   const handelNext = () => {
      setCurrentPage(currentPage + 1);
      setSearchText(searchText);
      setDisablePrevious(false);
      setLoading(true);
   };
   useEffect(() => {
      if (1 === currentPage) {
         console.log("preve");
         setDisablePrevious(true);
      }
      if (totalPages === currentPage) {
         console.log("nex");
         setDisableNext(true);
      }
   }, [currentPage, totalPages]);

   return (
      <div className="my-16">
         <div className="text-center text-white mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">All Of Our Toys</h2>
            <p className="text-xl font-semibold">You can see toy in a list together</p>
            <form onSubmit={handelSearch}>
               <input
                  type="text"
                  placeholder="Search Toy"
                  name="text"
                  className="input input-bordered input-primary text-black w-full max-w-xs"
               />
               <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 ml-3 rounded-lg"
                  type="submit"
               >
                  Search
               </button>
            </form>
         </div>
         {loading ? (
            <ColorRing
               visible={true}
               height="80"
               width="80"
               ariaLabel="blocks-loading"
               wrapperStyle={{}}
               wrapperClass="blocks-wrapper"
               colors={["#00ffff", "#ffebcd", "#2d2dff", "#87ceeb", "#ff3737"]}
            />
         ) : (
            <div>
               <Helmet>
                  <title>Tiny Driver Toy | All Toy</title>
               </Helmet>
               <div className="overflow-x-auto w-full" data-aos="zoom-in">
                  <table className="table w-full">
                     {/* head */}
                     <thead>
                        <tr>
                           <th>Toy</th>
                           <th>Seller</th>
                           <th>Price & Rating</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {toys.map((toy) => (
                           <ToyRow key={toy._id} toy={toy}></ToyRow>
                        ))}
                     </tbody>
                     {/* foot */}
                     <tfoot>
                        <tr>
                           <th>Toy</th>
                           <th>Seller</th>
                           <th>Price & Rating</th>
                           <th>Action</th>
                        </tr>
                     </tfoot>
                  </table>
               </div>

               <div className="flex justify-around my-6">
                  <button
                     className={`bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${
                        disablePrevious && "btn-disabled"
                     }`}
                     onClick={handelPrevious}
                  >
                     <FaAngleLeft></FaAngleLeft> Previous
                  </button>
                  <button
                     className={`bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${
                        disableNext && "btn-disabled"
                     }`}
                     onClick={handelNext}
                  >
                     Next<FaAngleRight></FaAngleRight>
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default AllToys;
