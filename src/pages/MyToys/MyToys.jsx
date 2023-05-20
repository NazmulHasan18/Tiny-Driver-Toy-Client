import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";

import { AuthContext } from "../../Provider/AuthProvider";
import ToyRow from "../AllToys/ToyRow";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
   const { user } = useContext(AuthContext);
   const [loading, setLoading] = useState(true);
   const [toys, setToys] = useState([]);
   const [totalPages, setTotalPages] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const [disableNext, setDisableNext] = useState(false);
   const [disablePrevious, setDisablePrevious] = useState(false);

   useEffect(() => {
      fetch(`https://toy-market-place-server.vercel.app/my_toys/${user?.email}?page=${currentPage}`)
         .then((res) => res.json())
         .then((data) => {
            setTotalPages(data.totalPages);
            setToys(data.toys);
            setLoading(false);
         });
   }, [currentPage, user]);

   const handelDeleteToy = (id, name) => {
      Swal.fire({
         title: `Do you want to delete ${name} toy?`,
         showDenyButton: true,
         confirmButtonText: "Delete Toy!",
         denyButtonText: "Cancel",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://toy-market-place-server.vercel.app/my_toys/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount === 1) {
                     const remaining = toys.filter((toy) => toy._id !== id);
                     setToys(remaining);
                     Swal.fire("Toy Deleted!", "", "success");
                  }
               });
         } else if (result.isDenied) {
            Swal.fire("Failed To Delete Toy", "", "info");
         }
      });
   };

   const handelPrevious = () => {
      setCurrentPage(currentPage - 1);

      setDisableNext(false);
      setLoading(true);
   };

   const handelNext = () => {
      setCurrentPage(currentPage + 1);

      setDisablePrevious(false);
      setLoading(true);
   };
   useEffect(() => {
      if (1 === currentPage) {
         setDisablePrevious(true);
      }
      if (totalPages === currentPage) {
         setDisableNext(true);
      }
   }, [currentPage, totalPages]);

   return (
      <div className="my-16">
         <div className="text-center text-white mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">The Toy You Added</h2>
            <p className="text-xl font-semibold">You can see toy in a list and update them if you want.</p>
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
               <div className="overflow-x-auto w-full" data-aos="zoom-in">
                  <table className="table w-full text-center">
                     {/* head */}
                     <thead>
                        <tr>
                           <th>Toy</th>
                           <th>Seller</th>
                           <th>Favorite Color</th>
                           <th>Action</th>
                           <th>Edit</th>
                        </tr>
                     </thead>
                     <tbody>
                        {toys.map((toy) => (
                           <ToyRow key={toy._id} toy={toy}>
                              <div className="flex gap-4 justify-center">
                                 <Link to={`/update_toy/${toy._id}`}>
                                    <button className="btn btn-warning btn-sm text-white">Update</button>
                                 </Link>

                                 <button
                                    className="btn btn-error btn-sm text-white"
                                    onClick={() => handelDeleteToy(toy._id, toy.name)}
                                 >
                                    Delete
                                 </button>
                              </div>
                           </ToyRow>
                        ))}
                     </tbody>
                     {/* foot */}
                     <tfoot>
                        <tr>
                           <th>Toy</th>
                           <th>Seller</th>
                           <th>Favorite Color</th>
                           <th>Action</th>
                           <th>Edit</th>
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

export default MyToys;
