import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateToy = () => {
   const navigate = useNavigate();
   const loadedToy = useLoaderData();
   const { register, handleSubmit } = useForm();
   const { user } = useContext(AuthContext);

   console.log(loadedToy);
   const { name, price, rating, available_quantity, seller_name, description } = loadedToy;

   const onSubmit = (toy) => {
      if (toy.rating > 5 || toy.rating < 0) {
         return toast.error("Ratings Must Be Less Then 5 and Greater Then 0");
      }
      Swal.fire({
         title: "Do you want to Update the toy?",
         showDenyButton: true,

         confirmButtonText: "Update Toy",
         denyButtonText: `Cancel`,
      }).then((result) => {
         //  Read more about isConfirmed, isDenied below
         if (result.isConfirmed) {
            fetch(`https://toy-market-place-server.vercel.app/update_toy/${loadedToy._id}`, {
               method: "PATCH",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(toy),
            })
               .then((res) => res.json())
               .then((data) => {
                  Swal.fire("Toy Added!", "", "success");
                  console.log(data);
                  navigate("/my_toys");
               });
         } else if (result.isDenied) {
            Swal.fire("Failed To Update", "", "info");
         }
      });
   };
   //    console.log(toy);

   //    picture_url,
   //    name,
   //    price,
   //    rating,
   //    seller_name,
   //    seller_email,
   //    sub_category,
   //    available_quantity,
   //    description,
   return (
      <div className="my-10">
         <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content w-full flex-col">
               <div className="text-center lg:text-left my-10">
                  <h1 className="text-5xl font-bold">UPDATE TOY!</h1>
               </div>
               <div className="card w-full shadow-2xl bg-base-100">
                  <div className="card-body">
                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* line 1 */}
                        <div className="md:flex w-full justify-center gap-8">
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Toy Name</span>
                              </label>
                              <input
                                 type="text"
                                 value={name}
                                 {...register("name")}
                                 placeholder="Enter Toy Name"
                                 className="input input-bordered input-info "
                                 readOnly
                              />
                           </div>
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Your Name</span>
                              </label>
                              <input
                                 type="text"
                                 defaultValue={seller_name}
                                 {...register("seller_name")}
                                 placeholder="Enter Your Name"
                                 className="input input-bordered input-info "
                                 readOnly
                              />
                           </div>
                        </div>
                        {/* line 2 */}
                        <div className="md:flex w-full justify-center gap-8">
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Your Email</span>
                              </label>
                              <input
                                 type="text"
                                 {...register("seller_email")}
                                 value={user?.email}
                                 className="input input-bordered input-info "
                                 readOnly
                              />
                           </div>
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Enter Price</span>
                              </label>
                              <input
                                 type="number"
                                 step="any"
                                 defaultValue={price}
                                 {...register("price")}
                                 placeholder="Enter Price"
                                 className="input input-bordered input-info "
                                 required
                              />
                           </div>
                        </div>
                        <div className="md:flex w-full justify-center gap-8">
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Enter Rating</span>
                              </label>
                              <input
                                 type="number"
                                 step="any"
                                 defaultValue={rating}
                                 {...register("rating")}
                                 placeholder="Enter Rating"
                                 className="input input-bordered input-info "
                                 required
                              />
                           </div>
                           <div className="form-control md:w-1/2">
                              <label className="label">
                                 <span className="label-text">Available Quantity</span>
                              </label>
                              <input
                                 type="number"
                                 defaultValue={available_quantity}
                                 {...register("available_quantity")}
                                 placeholder="Enter Available Quantity"
                                 className="input input-bordered input-info "
                                 required
                              />
                           </div>
                        </div>
                        <div className="form-control md:w-1/2 mx-auto">
                           <label className="label">
                              <span className="label-text">Write About Toy</span>
                           </label>
                           <textarea
                              type="text"
                              {...register("description")}
                              placeholder="Write Description"
                              className="textarea textarea-bordered textarea-lg w-full textarea-info"
                              defaultValue={description}
                              required
                           ></textarea>
                        </div>
                        <div className="form-control w-1/2 mx-auto mt-6">
                           <button className="btn btn-info text-white">Update Toy</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpdateToy;
