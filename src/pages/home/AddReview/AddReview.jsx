import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { toast } from "react-toastify";

const AddReview = () => {
   const { user } = useContext(AuthContext);

   const navigate = useNavigate();

   const handelReviewPost = (e) => {
      e.preventDefault();

      if (user) {
         const form = e.target;
         const comment = form.comment.value;
         const rating = parseFloat(form.rating.value);
         const date = moment().format("DD-MM-YYYY");
         const customerName = user.displayName;
         const image = user.photoURL;

         if (rating > 5 || rating <= 0) {
            return toast.error("Rating Cannot Be greater then 5 or less then 0");
         }
         const review = { customerName, comment, rating, date, image };

         fetch("https://toy-market-place-server.vercel.app/reviews", {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.insertedId) {
                  toast.success("Your Review Added Successfully");
                  form.reset();
               }
            });
      } else {
         navigate("/login");
      }
   };

   return (
      <div className="my-24" data-aos="fade-up">
         <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold ">Add Review</h2>
            <p className="md:text-xl px-5 font-semibold">Leave A Review For Us What Do You Think About Us.</p>
         </div>
         <form className="bg-white p-10 rounded-lg" onSubmit={handelReviewPost}>
            <div className="md:flex gap-10">
               <div className="form-control md:w-1/2 mx-auto">
                  <label className="label">
                     <span className="label-text">Write About Toy</span>
                  </label>
                  <textarea
                     type="text"
                     name="comment"
                     placeholder="Write Description"
                     className="textarea textarea-bordered textarea-lg w-full textarea-info bg-slate-200"
                     required
                  ></textarea>
               </div>
               <div className="md:w-1/2 flex flex-col gap-3">
                  <div className="form-control ">
                     <label className="label">
                        <span className="label-text">Enter Rating</span>
                     </label>
                     <input
                        type="number"
                        step="any"
                        name="rating"
                        placeholder="Enter Rating"
                        className="input input-bordered input-info w-full bg-slate-200"
                        required
                     />
                  </div>
                  <button type="submit" className="btn btn-info w-48 mx-auto md:mx-0 text-white">
                     Add Review
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default AddReview;
